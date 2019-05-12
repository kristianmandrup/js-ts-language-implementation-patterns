import { traverser } from "./traverser";

export function toChinese(ast: any) {
  let string = "";
  let visitor = {
    onExpressionStatementThrough(node: any) {
      switch (node.operand) {
        case "+":
          string += " plus ";
          break;
        case "-":
          string += " minus ";
          break;
        case "*":
          string += " multiply ";
          break;
        case "/":
          string += " except ";
          break;
        default:
          throw new Error(`unknow operand ${node.operand}`);
      }
    },
    onNumberLiteralExit(node: any) {
      let value = node.value
        .split("")
        .map((item: any) =>
          item === " . " ? " Point " : "零一二三四五六七八九"[item]
        )
        .join("");
      string += value;
    },
    onGroupingStatementEnter() {
      string += "(";
    },
    onGroupingStatementExit() {
      string += ")";
    }
  };
  traverser(ast, visitor);
  return string;
}
