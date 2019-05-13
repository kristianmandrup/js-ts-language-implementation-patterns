// import { CommonTree } from "./CommonTree";
// import { Tree } from "./Tree";
// import { BaseTree } from "./BaseTree";
// import { Token } from "./Token";
import { Scope } from "./Scope";
import { Type } from "./Type";
import { CodeSymbol } from "./CodeSymbol";

export class CymbolAST extends CommonTree {
  public scope?: Scope; // set by Def.g; ID lives in which scope?
  public symbol?: CodeSymbol; // set by Types.g; point at def in symbol table

  /** We often know the type of an expression; set by Types.g. */
  public evalType?: Type;

  /** During analysis we sometimes find that known types like int must
   *  be promoted to float etc...  Set by Types.g.
   */
  public promoteToType?: Type;

  constructor(t: Token) {
    super(t);
  }

  public toString(): string {
    let s: string = super.toString();
    const { evalType, promoteToType } = this;

    if (evalType != null) {
      let annot = evalType.getName();
      if (promoteToType != null) {
        annot += ":" + promoteToType.getName();
      }
      return s + "<" + annot + ">";
    }
    return s;
  }
}
