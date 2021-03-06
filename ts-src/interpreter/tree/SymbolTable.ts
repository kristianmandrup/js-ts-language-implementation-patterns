import { BuiltInTypeSymbol } from "./BuiltInTypeSymbol";
import { CymbolListener } from "./CymbolListener";
import { GlobalScope } from "./GlobalScope";
import { TokenStream } from "./TokenStream";
import { Type } from "./Type";
import { CymbolAST } from "./CymbolAST";
import { VariableSymbol } from "./VariableSymbol";
import { ArrayType } from "../../semantics/promote/ArrayType";
import { MethodSymbol } from "../../semantics/safety/MethodSymbol";
import { StructSymbol } from "../../semantics/promote/StructSymbol";

const tUSER = 0; // user-defined type (struct)
const tBOOLEAN = 1;
const tCHAR = 2;
const tINT = 3;
const tFLOAT = 4;
const tVOID = 5;
const tPTR = 6;

class BasicCymbolListener implements CymbolListener {
  info(msg: string) {
    console.log(msg);
  }
  error(msg: string) {
    console.log(msg);
  }
}

function createListener() {
  return new BasicCymbolListener();
}

type TypeLike = Type | null;

const _boolean: BuiltInTypeSymbol = new BuiltInTypeSymbol("boolean", tBOOLEAN);
const _char: BuiltInTypeSymbol = new BuiltInTypeSymbol("char", tCHAR);
const _int: BuiltInTypeSymbol = new BuiltInTypeSymbol("int", tINT);
const _float: BuiltInTypeSymbol = new BuiltInTypeSymbol("float", tFLOAT);
const _void: BuiltInTypeSymbol = new BuiltInTypeSymbol("void", tVOID);

interface IBuiltInSymbolMap {
  [key: string]: BuiltInTypeSymbol;
}

const builtInSymbolMap: IBuiltInSymbolMap = {
  boolean: _boolean,
  char: _char,
  int: _int,
  float: _float,
  void: _void
};

const indexToType: TypeLike[] = [
  // 0, 1,        2,     3,    4,      5
  null,
  _boolean,
  _char,
  _int,
  _float,
  _void
];

/** Map t1 op t2 to result type (_void implies illegal) */
const arithmeticResultType: TypeLike[][] = [
  /*          struct  boolean  char    int     float,   void */
  /*struct*/ [_void, _void, _void, _void, _void, _void],
  /*boolean*/ [_void, _void, _void, _void, _void, _void],
  /*char*/ [_void, _void, _char, _int, _float, _void],
  /*int*/ [_void, _void, _int, _int, _float, _void],
  /*float*/ [_void, _void, _float, _float, _float, _void],
  /*void*/ [_void, _void, _void, _void, _void, _void]
];

const relationalResultType: TypeLike[][] = [
  /*          struct  boolean char      int       float,    void */
  /*struct*/ [_void, _void, _void, _void, _void, _void],
  /*boolean*/ [_void, _void, _void, _void, _void, _void],
  /*char*/ [_void, _void, _boolean, _boolean, _boolean, _void],
  /*int*/ [_void, _void, _boolean, _boolean, _boolean, _void],
  /*float*/ [_void, _void, _boolean, _boolean, _boolean, _void],
  /*void*/ [_void, _void, _void, _void, _void, _void]
];

const equalityResultType: TypeLike[][] = [
  /*           struct boolean   char      int       float,    void */
  /*struct*/ [_void, _void, _void, _void, _void, _void],
  /*boolean*/ [_void, _boolean, _void, _void, _void, _void],
  /*char*/ [_void, _void, _boolean, _boolean, _boolean, _void],
  /*int*/ [_void, _void, _boolean, _boolean, _boolean, _void],
  /*float*/ [_void, _void, _boolean, _boolean, _boolean, _void],
  /*void*/ [_void, _void, _void, _void, _void, _void]
];

/** Indicate whether a type needs a promotion to a wider type.
 *  If not null, implies promotion required.  Null does NOT imply
 *  error--it implies no promotion.  This works for
 *  arithmetic, equality, and relational operators in Cymbol.
 */
const promoteFromTo: TypeLike[][] = [
  /*          struct  boolean  char    int     float,   void */
  /*struct*/ [null, null, null, null, null, null],
  /*boolean*/ [null, null, null, null, null, null],
  /*char*/ [null, null, null, _int, _float, null],
  /*int*/ [null, null, null, null, _float, null],
  /*float*/ [null, null, null, null, null, null],
  /*void*/ [null, null, null, null, null, null]
];

export class SymbolTable {
  // arithmetic types defined in order from narrowest to widest
  public static tUSER = tUSER; // user-defined type (struct)
  public static tBOOLEAN = tBOOLEAN;
  public static tCHAR = tCHAR;
  public static tINT = tINT;
  public static tFLOAT = tFLOAT;
  public static tVOID = tVOID;
  public static tPTR = tPTR;

  public listener: CymbolListener = createListener();

  /** arithmetic types defined in order from narrowest to widest */
  public static equalityResultType = equalityResultType;
  public static relationalResultType = relationalResultType;
  static promoteFromTo = promoteFromTo;
  static arithmeticResultType = arithmeticResultType;
  static indexToType = indexToType;

  globals: GlobalScope = new GlobalScope();

  /** Need to have token buffer to print out expressions, errors */
  tokens?: TokenStream;

  SymbolTable(tokens: TokenStream) {
    this.tokens = tokens;
    this.initTypeSystem();
  }

  protected initTypeSystem(): void {
    const { globals } = this;
    for (let t in SymbolTable.indexToType) {
      const sym = builtInSymbolMap[t];
      if (t != null) globals.define(sym);
    }
  }

  getResultType(typeTable: TypeLike[][], a: CymbolAST, b: CymbolAST): TypeLike {
    const { text } = this;
    const ta = a.getTypeIndex(); // type index of left operand
    const tb = b.getTypeIndex(); // type index of right operand

    const result = typeTable[ta][tb]; // operation result type
    if (result == _void) {
      this.listener.error(
        text(a) +
          ", " +
          text(b) +
          " have incompatible types in " +
          text(a.getParent())
      );
    } else {
      a.promoteToType = promoteFromTo[ta][tb];
      b.promoteToType = promoteFromTo[tb][ta];
    }
    return result;
  }

  bop(a: CymbolAST, b: CymbolAST): TypeLike {
    return this.getResultType(arithmeticResultType, a, b);
  }

  relop(a: CymbolAST, b: CymbolAST): Type {
    this.getResultType(relationalResultType, a, b);
    // even if the operands are incompatible, the type of
    // this operation must be boolean
    return _boolean;
  }

  eqop(a: CymbolAST, b: CymbolAST): Type {
    this.getResultType(equalityResultType, a, b);
    return _boolean;
  }

  signalError(msg: string) {
    this.listener.error(msg);
  }

  uminus(a: CymbolAST): Type {
    const { text } = this;
    if (!(a.evalType == _int || a.evalType == _float)) {
      this.signalError(
        text(a) + " must have int/float type in " + text(a.getParent())
      );
      return _void;
    }
    return a.evalType;
  }

  unot(a: CymbolAST): Type {
    const { text } = this;
    if (a.evalType != _boolean) {
      this.signalError(
        text(a) + " must have boolean type in " + text(a.getParent())
      );
      return _boolean; // even though wrong, assume result boolean
    }
    return a.evalType;
  }

  arrayIndex(id: CymbolAST, index: CymbolAST): Type {
    const { text } = this;
    const s = id.resolveScope(id.getText());
    id.symbol = s; // annotate AST
    if (
      s.getClass() != VariableSymbol.constructor || // ensure it's an array
      s.type.getClass() != ArrayType.constructor
    ) {
      this.signalError(
        text(id) + " must be an array variable in " + text(id.getParent())
      );
      return _void;
    }

    const vs = s;
    const t = vs.type.elementType; // get element type
    const texpr = index.evalType.getTypeIndex();
    // promote the index expr if necessary to int
    index.promoteToType = promoteFromTo[texpr][tINT];
    if (!this.canAssignTo(index.evalType, _int, index.promoteToType)) {
      this.signalError(
        text(index) + " index must have integer type in " + text(id.getParent())
      );
    }
    return t;
  }

  call(id: CymbolAST, args: any[]): Type {
    const { text } = this;
    const s = id.scope.resolve(id.getText());
    if (s.getClass() != MethodSymbol.constructor) {
      this.listener.error(
        text(id) + " must be a function in " + text(id.getParent())
      );
      return _void;
    }

    let ms = s;
    id.symbol = ms;
    let i = 0;

    for (let a of ms.orderedArgs.values()) {
      // for each arg
      let argAST = args[i++];

      // get argument expression type and expected type
      let actualArgType = argAST.evalType;
      let formalArgType = a.type;
      let targ = actualArgType.getTypeIndex();
      let tformal = formalArgType.getTypeIndex();

      // do we need to promote argument type to defined type?
      argAST.promoteToType = promoteFromTo[targ][tformal];
      if (
        !this.canAssignTo(actualArgType, formalArgType, argAST.promoteToType)
      ) {
        this.listener.error(
          text(argAST) +
            ", argument " +
            a.name +
            ":<" +
            a.type +
            "> of " +
            ms.name +
            "() have incompatible types in " +
            text(id.getParent())
        );
      }
    }
    return ms.type;
  }

  member(expr: CymbolAST, field: CymbolAST): Type {
    const { text } = this;
    const type = expr.evalType;
    if (type.getClass() != StructSymbol.constructor) {
      this.signalError(
        text(expr) + " must have struct type in " + text(expr.getParent())
      );
      return _void;
    }
    let scope = expr.evalType; // get scope of left
    let s = scope.resolveMember(field.getText()); // resolve ID in scope
    field.symbol = s;
    return s.type; // return ID's type
  }

  // assignnment stuff (arg assignment in call())

  declinit(declID: CymbolAST, init: CymbolAST): void {
    const { text } = this;
    const te = init.evalType.getTypeIndex(); // promote expr to decl type?
    const tdecl = declID.symbol.type.getTypeIndex();
    declID.evalType = declID.symbol.type;
    init.promoteToType = promoteFromTo[te][tdecl];
    if (
      !this.canAssignTo(init.evalType, declID.symbol.type, init.promoteToType)
    ) {
      this.signalError(
        text(declID) +
          ", " +
          text(init) +
          " have incompatible types in " +
          text(declID.getParent())
      );
    }
  }

  public ret(ms: MethodSymbol, expr: CymbolAST): void {
    const { text } = this;
    const retType = ms.type || null; // promote return expr to function decl type?
    const exprType = expr.evalType;
    const texpr = exprType.getTypeIndex();
    const tret = retType ? retType.getTypeIndex() : 0;
    expr.promoteToType = promoteFromTo[texpr][tret];
    if (!this.canAssignTo(exprType, retType, expr.promoteToType)) {
      this.signalError(
        text(expr) +
          ", " +
          ms.name +
          "():<" +
          ms.type +
          "> have incompatible types in " +
          text(expr.getParent())
      );
    }
  }

  public assign(lhs: CymbolAST, rhs: CymbolAST): void {
    const { text } = this;
    const tlhs = lhs.evalType.getTypeIndex(); // promote right to left type?
    const trhs = rhs.evalType.getTypeIndex();
    rhs.promoteToType = promoteFromTo[trhs][tlhs];
    if (!this.canAssignTo(rhs.evalType, lhs.evalType, rhs.promoteToType)) {
      this.signalError(
        text(lhs) +
          ", " +
          text(rhs) +
          " have incompatible types in " +
          text(lhs.getParent())
      );
    }
  }

  ifstat(cond: CymbolAST): void {
    const { text } = this;
    if (cond.evalType != _boolean) {
      this.listener.error(
        "if condition " +
          text(cond) +
          " must have boolean type in " +
          text(cond.getParent())
      );
    }
  }

  canAssignTo(valueType: Type, destType: TypeLike, promotion: Type): boolean {
    // either types are same or value was successfully promoted
    return valueType == destType || promotion == destType;
  }

  text(t: CymbolAST): string {
    let ts = "";
    if (t.evalType != null) ts = ":<" + t.evalType + ">";
    if (!this.tokens) return "";
    return (
      this.tokens.toString(t.getTokenStartIndex(), t.getTokenStopIndex()) + ts
    );
  }

  toString(): string {
    return this.globals.toString();
  }
}
