import {
  Program,
  ExpressionStatement,
  GroupingStatement,
  NumberLiteral
} from "./util";

export function parser(input: any[]) {
  let ast = {
    type: Program,
    body: []
  };
  let stack: any[] = ast.body;
  let index = 0;
  let token: any = null;

  let next = () => {
    token = input[index++];
  };

  let peek = () => {
    return input[index];
  };

  let handleRight = (previous: any, right: any) => {
    let target = previous;
    while (target.right && target.right.type === ExpressionStatement) {
      target = target.right;
    }
    target.right = right;
  };

  let handleNumber = () => {
    let previous = stack[stack.length - 1];
    if (!previous) {
      stack.push({
        type: NumberLiteral,
        value: token.value
      });
      return;
    }

    if (previous.type !== ExpressionStatement) {
      throw new Error(
        " Illegal combination: the number must be preceded by operator "
      );
    }

    handleRight(previous, {
      type: NumberLiteral,
      value: token.value
    });
  };

  let handleExpression = () => {
    let previous = stack[stack.length - 1];
    if (!previous) {
      throw new Error(" operator cannot appear alone ");
    }

    let isValid =
      previous.type === NumberLiteral ||
      previous.type === ExpressionStatement ||
      previous.type === GroupingStatement;

    if (!isValid) {
      throw new Error(" Illegal expression ");
    }

    if (token.value === "+" || token.value === "-") {
      stack.pop();
      let expression = {
        type: ExpressionStatement,
        operand: token.value,
        left: previous,
        right: null
      };
      stack.push(expression);
      return;
    } else if (token.value === "*" || token.value === "/") {
      if (previous.type === ExpressionStatement) {
        if (previous.operand === "+" || previous.operand === "-") {
          let expression = {
            type: ExpressionStatement,
            operand: token.value,
            left: previous.right,
            right: null
          };
          previous.right = expression;
          return;
        } else if (previous.operand === "*" || previous.operand === "/") {
          stack.pop();
          let expression = {
            type: ExpressionStatement,
            operand: token.value,
            left: previous,
            right: null
          };
          stack.push(expression);
          return;
        }
      } else if (
        previous.type === NumberLiteral ||
        previous.type === GroupingStatement
      ) {
        stack.pop();
        let expression = {
          type: ExpressionStatement,
          operand: token.value,
          left: previous,
          right: null
        };
        stack.push(expression);
        return;
      }
    }

    throw new Error(" unsupported operation ");
  };

  let handleGrouping = () => {
    let grouping = {
      type: GroupingStatement,
      body: []
    };

    let currentStack = stack;
    stack = grouping.body;

    let currentToken = token;
    while (
      currentToken &&
      !(currentToken.type === "parenthese" && currentToken.value === ")")
    ) {
      handler();
      currentToken = peek();
    }

    next();

    stack = currentStack;

    if (!grouping.body.length) {
      throw new Error(" does not support empty brackets ");
    }

    let previous = stack[stack.length - 1];
    if (!previous) {
      stack.push(grouping);
    }

    if (previous.type === ExpressionStatement) {
      handleRight(previous, grouping);
      return;
    }

    throw new Error(" Illegal sign in front of the packet ");
  };

  let handler = () => {
    next();
    switch (token && token.type) {
      case "number":
        handleNumber();
        break;
      case "operand":
        handleExpression();
        break;
      case "parenthese":
        handleGrouping();
        break;
    }
  };

  while (index < input.length) {
    handler();
  }

  return ast;
}
