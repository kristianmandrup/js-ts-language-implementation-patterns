import { VecMathVisitor } from "./VecMathVisitor";
import { AssignNode } from "./AssignNode";
import { MultNode } from "./MultNode";
import { PrintNode } from "./PrintNode";
import { StatListNode } from "./StatListNode";
import { StatNode } from "./StatNode";
import { AddNode } from "./AddNode";
import { VectorNode } from "./VectorNode";
import { IntNode } from "./IntNode";
import { VarNode } from "./VarNode";
import { DotProductNode } from "./DotProductNode";

export class PrintVisitor implements VecMathVisitor {
  visit(n: any): void {
    n.id.visit(this);
    this.print("=");
    n.value.visit(this);
    this.println();
  }

  protected print(msg?: string) {}

  protected println() {}

  public visitStatListNode(n: StatListNode) {
    n.elements.map(p => p.visit(this));
  }

  public visitPrintNode(n: PrintNode) {
    this.print("print ");
    n.value.visit(this);
    this.println();
  }

  public visitAddNode(n: AddNode) {
    n.left.visit(this);
    this.print("+");
    n.right.visit(this);
  }

  public visitDotProductNode(n: DotProductNode) {
    n.left.visit(this);
    this.print(".");
    n.right.visit(this);
  }

  public visitMultNode(n: MultNode) {
    n.left.visit(this);
    this.print("*");
    n.right.visit(this);
  }

  public visitIntNode(n: IntNode) {
    this.print(n.toString());
  }

  public visitVarNode(n: VarNode) {
    this.print(n.toString());
  }

  public visitVectorNode(n: VectorNode) {
    this.print("[");
    if (n.elements != null) {
      for (let i = 0; i < n.elements.length; i++) {
        const child = n.elements[i];
        if (i > 0) this.print(", ");
        child.visit(this);
      }
    }
    this.print("]");
  }
}
