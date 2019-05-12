import { Ast } from "./Ast";
import { Visitor } from "./Visitor";
import {
  PLUS_SIGN,
  MINUS_SIGN,
  MULTIPLICATION_SIGN,
  DEVISION_SIGN
} from "./tokens";

export class Interpreter extends Visitor {
  stack: any[];

  constructor(ast: Ast) {
    super(ast);
    this.stack = [];
  }
  get output() {
    return this.stack[0];
  }
  set output(v) {}
  handleProgramEnter(node: any, parent: any, layer: any) {}
  handleProgramExit(node: any, parent: any, layer: any) {}
  handleExpressionStatementEnter(node: any, parent: any, layer: any) {}
  handleExpressionStatementExit(node: any, parent: any, layer: any) {
    let right = this.stack.pop();
    let left = this.stack.pop();
    let value = 0;
    switch (node.operand) {
      case PLUS_SIGN:
        value = left + right;
        break;
      case MINUS_SIGN:
        value = left - right;
        break;
      case MULTIPLICATION_SIGN:
        value = left * right;
        break;
      case DEVISION_SIGN:
        value = left / right;
        break;
    }
    this.stack.push(value);
  }
  handleNumberLiteralEnter(node: any, parent: any, layer: any) {
    this.stack.push(Number(node.value));
  }
  handleNumberLiteralExit(node: any, parent: any, layer: any) {}
  handleGroupingStatementEnter(node: any, parent: any, layer: any) {}
  handleGroupingStatementExit(node: any, parent: any, layer: any) {}
}
