import { Ast } from "./Ast";
import { Traverser } from "./Traverser";

export class Visitor {
  traverser: Traverser;
  output: string | null;

  constructor(ast: Ast) {
    this.traverser = new Traverser(ast, this);
    this.output = null;
  }
  execute() {
    this.traverser.execute();
    return this.output;
  }
}
