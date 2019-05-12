import { traverser } from "./traverser";

export function evaluated(ast: any) {
  let stack: any[] = [];
  let visitor = {
    onExpressionStatementExit(node: any) {
      let right = stack.pop();
      let left = stack.pop();
      let value;
      switch (node.operand) {
        case "+":
          value = left + right;
          break;
        case "-":
          value = left - right;
          break;
        case "*":
          value = left * right;
          break;
        case "/":
          value = left / right;
          break;
        default:
          throw new Error(`unknow operand ${node.operand}`);
      }
      stack.push(value);
    },
    onNumberLiteralEnter(node: any) {
      stack.push(Number(node.value));
    }
  };
  traverser(ast, visitor);
  return stack[0];
}
