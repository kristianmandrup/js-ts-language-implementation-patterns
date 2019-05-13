import { Type } from "./Type";
import { Scope } from "./Scope";
import { CymbolAST } from "./CymbolAST";

export class CodeSymbol {
  // A generic programming language symbol
  name: string; // All symbols at least have a name
  type?: Type;
  scope?: Scope; // All symbols know what scope contains them.
  def?: CymbolAST; // Location in AST of ID node

  constructor(name: string, type?: Type) {
    this.name = name;
    this.type = type;
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    let s = "";
    const { scope, type } = this;
    if (scope != null) {
      s = scope.getScopeName() + ".";
    }
    if (type != null) return "<" + s + this.getName() + ":" + type + ">";
    return s + this.getName();
  }

  public static stripBrackets(s: string): string {
    return s.substring(1, s.length - 1);
  }

  public stripBrackets(s: string): string {
    return s.substring(1, s.length - 1);
  }
}
