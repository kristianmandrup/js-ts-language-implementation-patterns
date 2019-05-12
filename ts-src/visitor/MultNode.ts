import { ExprNode } from "./ExprNode";
import { Token } from "./Token";
import { VecMathVisitor } from "./VecMathVisitor";

export class MultNode extends ExprNode {
  left: ExprNode;
  right: ExprNode; // named, node-specific, irregular children
  constructor(left: ExprNode, t: Token, right: ExprNode) {
    super(t);
    this.left = left;
    this.right = right;
  }
  public visit(visitor: VecMathVisitor) {
    visitor.visit(this);
  }
}
