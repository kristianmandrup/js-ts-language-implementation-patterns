import { HeteroAST } from "./HeteroAST";
import { Token } from "./Token";
import { VecMathVisitor } from "./VecMathVisitor";
export abstract class VecMathNode extends HeteroAST {
  constructor(t: Token) {
    super(t);
  }

  public abstract visit(visitor: VecMathVisitor): void; // dispatcher
}
