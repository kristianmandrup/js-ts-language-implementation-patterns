import { ExprNode } from "./ExprNode";
import { VecMathVisitor } from "./VecMathVisitor";
import { Token } from "./Token";
export class IntNode extends ExprNode {
  constructor(t: Token) {
    super(t);
  }
  public visit(visitor: VecMathVisitor) {
    visitor.visit(this);
  }
}
