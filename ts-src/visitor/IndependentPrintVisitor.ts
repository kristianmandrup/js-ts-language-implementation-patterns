import { VecMathNode } from "./VecMathNode";
import { Token } from "./Token";
import { VectorNode } from "./VectorNode";
import { VarNode } from "./VarNode";
import { IntNode } from "./IntNode";
import { MultNode } from "./MultNode";
import { DotProductNode } from "./DotProductNode";
import { PrintNode } from "./PrintNode";
import { AddNode } from "./AddNode";
import { AssignNode } from "./AssignNode";
import { StatListNode } from "./StatListNode";

class UnsupportedOperationException {
  constructor(msg: string) {}
}
export class IndependentPrintVisitor {
  // visitor dispatch according to node token type
  print(n: VecMathNode) {
    switch (n.token.type) {
      case Token.ID:
        this.printVarNode(n);
        break;
      case Token.ASSIGN:
        this.printAssignNode(n as AssignNode);
        break;
      case Token.PRINT:
        this.printPrintNode(n as PrintNode);
        break;
      case Token.PLUS:
        this.printAddNode(n as AddNode);
        break;
      case Token.MULT:
        this.printMultNode(n as MultNode);
        break;
      case Token.DOT:
        this.printDotProductNode(n as DotProductNode);
        break;
      case Token.INT:
        this.printIntNode(n as IntNode);
        break;
      case Token.VEC:
        this.printVectorNode(n as VectorNode);
        break;
      case Token.STAT_LIST:
        this.printStatListNode(n as StatListNode);
        break;
      default:
        // catch unhandled node types
        throw new UnsupportedOperationException(
          "Node " + n.constructor.name + " not handled"
        );
    }
  }

  printStatListNode(n: StatListNode) {
    for (let p of n.elements) this.print(p);
  }

  printAssignNode(n: AssignNode) {
    this.print(n.id); // walk left child
    console.log("="); // print operator
    this.print(n.value); // walk right child
    console.log("\n"); // print newline
  }

  printPrintNode(n: PrintNode) {
    console.log("print ");
    this.print(n.value);
    console.log("\n");
  }

  printAddNode(n: AddNode) {
    this.print(n.left); // walk left child
    console.log("+"); // print operator
    this.print(n.right); // walk right child
  }

  printDotProductNode(n: DotProductNode) {
    this.print(n.left);
    console.log(".");
    this.print(n.right);
  }

  printMultNode(n: MultNode) {
    this.print(n.left);
    console.log("*");
    this.print(n.right);
  }

  printIntNode(n: IntNode) {
    console.log(n.toString());
  }

  printVarNode(n: VarNode) {
    console.log(n.toString());
  }

  printVectorNode(n: VectorNode) {
    console.log("[");
    if (n.elements != null) {
      for (let i = 0; i < n.elements.length; i++) {
        const child = n.elements[i];
        if (i > 0) console.log(", ");
        this.print(child);
      }
    }
    console.log("]");
  }
}
