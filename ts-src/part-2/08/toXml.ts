import { traverser } from "./traverser";

export function toXML(ast: any, indent = 2) {
  let xml = "";
  let handleIndent = (layer = 0) => {
    if (indent > 0) {
      return "\n".padEnd(layer * indent, " ");
    }
    return "";
  };
  let visitor = {
    onProgramEnter(node: any, parent: any, layer: any) {
      xml += handleIndent(layer) + "<program>";
    },
    onProgramExit(node: any, parent: any, layer: any) {
      xml += handleIndent(layer) + "</program>";
    },
    onNumberLiteralEnter(node: any, parent: any, layer: any) {
      xml += handleIndent(layer) + "<number>";
      xml += handleIndent(layer + 1) + node.value;
    },
    onNumberLiteralExit(node: any, parent: any, layer: any) {
      xml += handleIndent(layer) + "</number>";
    },
    onExpressionStatementEnter(node: any, parent: any, layer: any) {
      xml += handleIndent(layer) + `<expression operand="${node.operand}">`;
    },
    onExpressionStatementExit(node: any, parent: any, layer: any) {
      xml += handleIndent(layer) + "</expression>";
    },
    onGroupingStatementEnter(node: any, parent: any, layer: any) {
      xml += handleIndent(layer) + "<grouping>";
    },
    onGroupingStatementExit(node: any, parent: any, layer: any) {
      xml += handleIndent(layer) + "</grouping>";
    }
  };
  traverser(ast, visitor);
  return xml;
}
