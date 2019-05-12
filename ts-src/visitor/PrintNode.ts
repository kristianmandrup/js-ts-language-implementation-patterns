import { StatNode } from "./StatNode";
import { ExprNode } from "./ExprNode";
import { Token } from "./Token";
import { VecMathVisitor } from "./VecMathVisitor";

export class PrintNode extends StatNode {
  value: ExprNode;
  constructor(t: Token, value: ExprNode) {
    super(t);
    this.value = value;
  }
  public visit(visitor: VecMathVisitor) {
    visitor.visit(this);
  }
}
