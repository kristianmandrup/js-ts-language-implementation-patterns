import { Ast } from "./Ast";
import { Visitor } from "./Visitor";
import { ExpressionStatement } from "./ExpressionStatement";
import { GroupingStatement } from "./GroupingStatement";

export class Traverser {
  ast: Ast;
  visitor: any;

  constructor(ast: Ast, visitor: any) {
    this.ast = ast;
    this.visitor = visitor;
  }
  handleArray(array: any[], parent: any, layer: number) {
    array.forEach(node => this.handleNode(node, parent, layer));
  }
  handleNode(node: any, parent: any, layer: number) {
    let enterMethod = `handle${node.type}Enter`;
    let exitMethod = `handle${node.type}Exit`;

    if (this.visitor[enterMethod]) {
      this.visitor[enterMethod](node, parent, layer);
    }

    if (node instanceof Ast) {
      this.handleArray(node.body, node, layer + 1);
    }

    if (node instanceof ExpressionStatement) {
      this.handleNode(node.left, node, layer + 1);
      this.handleNode(node.right, node, layer + 1);
    }

    if (node instanceof GroupingStatement) {
      this.handleArray(node.body, node, layer + 1);
    }

    if (this.visitor[exitMethod]) {
      this.visitor[exitMethod](node, parent, layer);
    }
  }
  execute() {
    this.handleNode(this.ast, null, 0);
  }
}
