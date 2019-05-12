import { VecMathNode } from "./VecMathNode";
import { Token } from "./Token";
import { StatNode } from "./StatNode";
import { VecMathVisitor } from "./VecMathVisitor";

export class StatListNode extends VecMathNode {
  elements: StatNode[] = [];
  constructor(elements: StatNode[]) {
    super(new Token(Token.STAT_LIST)); // create imaginary token
    this.elements = elements;
  }
  public visit(visitor: VecMathVisitor): void {
    visitor.visit(this);
  }
}
