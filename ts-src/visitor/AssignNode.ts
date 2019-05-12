import { StatNode } from "./StatNode";
import { VarNode } from "./VarNode";
import { ExprNode } from "./ExprNode";
import { Token } from "./Token";
import { VecMathVisitor } from "./VecMathVisitor";
export class AssignNode extends StatNode {
  id: VarNode;
  value: ExprNode;
  constructor(id: VarNode, t: Token, value: ExprNode) {
    super(t);
    this.id = id;
    this.value = value;
  }
  public visit(visitor: VecMathVisitor) {
    visitor.visit(this);
  }
}
