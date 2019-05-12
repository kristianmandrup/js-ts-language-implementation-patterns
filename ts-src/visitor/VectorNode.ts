import { ExprNode } from "./ExprNode";
import { VecMathVisitor } from "./VecMathVisitor";
import { Token } from "./Token";
export class VectorNode extends ExprNode {
  elements: ExprNode[] = [];

  constructor(t: Token, elements: ExprNode[]) {
    super(t);
    // track vector token; most likely it's an imaginary token
    this.elements = elements;
  }
  public visit(visitor: VecMathVisitor): void {
    visitor.visit(this);
  }
}
