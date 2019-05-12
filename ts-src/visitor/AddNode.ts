import { ExprNode } from "./ExprNode";
import { Token } from "./Token";
import { VecMathVisitor } from "./VecMathVisitor";

export class AddNode extends ExprNode {
  // named, node-specific, irregular children
  left: ExprNode;
  right: ExprNode;

  constructor(left: ExprNode, t: Token, right: ExprNode) {
    super(t);
    this.left = left;
    this.right = right;
  }
  public visit(visitor: VecMathVisitor): void {
    visitor.visit(this);
  }
}
