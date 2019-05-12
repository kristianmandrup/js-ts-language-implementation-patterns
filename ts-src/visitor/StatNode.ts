import { VecMathNode } from "./VecMathNode";
import { Token } from "./Token";
export abstract class StatNode extends VecMathNode {
  constructor(t: Token) {
    super(t);
  }
}
