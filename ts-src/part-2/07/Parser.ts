import { Ast } from "./Ast";
import { NumberLiteral } from "./NumberLiteral";
import { ExpressionStatement } from "./ExpressionStatement";
import { GroupingStatement } from "./GroupingStatement";
import { NUMBER, OPERAND } from "./tokens";
import {
  PLUS_SIGN,
  MINUS_SIGN,
  MULTIPLICATION_SIGN,
  DEVISION_SIGN,
  PARENTHESE,
  RIGHT_PARENTHESE
} from "./tokens";

export class Parser {
  input: any[];
  output: Ast;
  index: number;
  stack: any[] = [];

  constructor(input: any[]) {
    this.input = input;
    this.output = new Ast();
    this.index = 0;
  }
  isNotEnd() {
    return this.index < this.input.length;
  }
  next() {
    if (this.isNotEnd()) {
      return this.input[this.index++];
    } else {
      null;
    }
  }
  peek(n = 0) {
    if (this.index + n < this.input.length) {
      return this.input[this.index + n];
    } else {
      return null;
    }
  }
  match(...args: any[]) {
    return args.every((type, index) =>
      this.peek(index) ? this.peek(index).is(type) : false
    );
  }
  handleNumberLiteral() {
    let token = this.next();
    let previous = this.stack[this.stack.length - 1];

    if (!previous) {
      this.stack.push(new NumberLiteral(token.value));
      return;
    }

    if (!(previous instanceof ExpressionStatement)) {
      throw new Error(
        " Illegal combination: the number must be preceded by operator "
      );
    }

    if (previous instanceof ExpressionStatement) {
      let target = previous;
      while (target.right instanceof ExpressionStatement) {
        target = target.right;
      }
      target.right = new NumberLiteral(token.value);
      return;
    }
  }

  handleExpressionStatement() {
    let token = this.next();
    let previous = this.stack[this.stack.length - 1];

    if (!previous) {
      throw new Error(" operator cannot appear alone ");
    }

    let isValid =
      previous instanceof NumberLiteral ||
      previous instanceof ExpressionStatement ||
      previous instanceof GroupingStatement;

    if (!isValid) {
      throw new Error(
        `The type before the operator must be a number, an expression, or a grouping instead of ${previous} `
      );
    }

    if (token.value === PLUS_SIGN || token.value === MINUS_SIGN) {
      this.stack.pop();
      let expression = new ExpressionStatement();
      expression.setOperand(token.value);
      expression.setLeft(previous);
      this.stack.push(expression);
      return;
    }

    if (token.value === MULTIPLICATION_SIGN || token.value === DEVISION_SIGN) {
      if (previous instanceof ExpressionStatement) {
        // example: 1 + (2 + 1) * 3 + 1 * 2 * 3
        if (previous.operand === PLUS_SIGN || previous.operand === MINUS_SIGN) {
          let expression = new ExpressionStatement();
          expression.setOperand(token.value);
          expression.setLeft(previous.right);
          previous.setRight(expression);
          return;
        }

        // example: 1 * 2 * 3
        this.stack.pop();
        let expression = new ExpressionStatement();
        expression.setOperand(token.value);
        expression.setLeft(previous);
        this.stack.push(expression);
        return;
      }

      if (
        previous instanceof NumberLiteral ||
        previous instanceof GroupingStatement
      ) {
        this.stack.pop();
        let expression = new ExpressionStatement();
        expression.setOperand(token.value);
        expression.setLeft(previous);
        this.stack.push(expression);
        return;
      }

      throw new Error(" unsupported operation ");
    }
  }

  handleGroupingStatement() {
    let token = this.next();
    let previous = this.stack[this.stack.length - 1];
    let currentStack = this.stack;
    let grouping = new GroupingStatement();
    this.stack = grouping.body;
    while (
      !(this.match(PARENTHESE) && this.peek().value === RIGHT_PARENTHESE)
    ) {
      this.handle();
    }
    this.next();
    this.stack = currentStack;
    if (!grouping.body.length) {
      throw new Error(" does not support empty brackets ");
    }

    if (!previous) {
      this.stack.push(grouping);
      return;
    }

    if (previous instanceof ExpressionStatement) {
      let target = previous;
      while (target.right instanceof ExpressionStatement) {
        target = target.right;
      }
      target.setRight(grouping);
      return;
    }

    throw new Error(" Illegal sign in front of the packet ");
  }

  // 1 * 2 + 2 + (3 + 4) * 2 * 3 / 2
  handle() {
    if (this.match(NUMBER)) {
      return this.handleNumberLiteral();
    }

    if (this.match(OPERAND)) {
      return this.handleExpressionStatement();
    }

    if (this.match(PARENTHESE)) {
      return this.handleGroupingStatement();
    }

    throw new Error(`非法 token：${this.next()}`);
  }
  execute() {
    while (this.isNotEnd()) {
      this.stack = this.output.body;
      this.handle();
    }
    return this.output;
  }
}
