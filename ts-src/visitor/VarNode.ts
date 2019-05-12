import { ExprNode } from "./ExprNode";
import { Token } from "./Token";
import { VecMathVisitor } from "./VecMathVisitor";
export class VarNode extends ExprNode {
  constructor(t: Token) {
    super(t);
  }
  public visit(visitor: VecMathVisitor) {
    visitor.visit(this);
  }
}
