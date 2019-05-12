export class ExpressionStatement {
  type: string;
  operand: any;
  left: any;
  right: any;

  constructor() {
    this.type = "ExpressionStatement";
    this.operand = null;
    this.left = null;
    this.right = null;
  }
  setOperand(operand: any) {
    this.operand = operand;
  }
  setLeft(left: any) {
    this.left = left;
  }
  setRight(right: any) {
    this.right = right;
  }
}
