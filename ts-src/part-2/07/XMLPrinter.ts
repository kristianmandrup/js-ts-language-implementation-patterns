import { Ast } from "./Ast";
import { Visitor } from "./Visitor";

export class XMLPrinter extends Visitor {
  output: string;
  layer: number;

  constructor(ast: Ast) {
    super(ast);
    this.output = "";
    this.layer = 0;
  }
  padStart(layer: number) {
    return "".padStart(layer * 2, " ");
  }
  handleProgramEnter(node: any, parent: any, layer: any) {
    this.output += this.padStart(layer);
    this.output += `<program>\n`;
  }
  handleProgramExit(node: any, parent: any, layer: any) {
    this.output += this.padStart(layer);
    this.output += `</program>\n`;
  }
  handleExpressionStatementEnter(node: any, parent: any, layer: any) {
    this.output += this.padStart(layer);
    this.output += `<expression operand="${node.operand}">\n`;
  }
  handleExpressionStatementExit(node: any, parent: any, layer: any) {
    this.output += this.padStart(layer);
    this.output += `</expression>\n`;
  }
  handleNumberLiteralEnter(node: any, parent: any, layer: any) {
    this.output += this.padStart(layer);
    this.output += `<number>${node.value}</number>\n`;
  }
  handleNumberLiteralExit(node: any, parent: any, layer: any) {}
  handleGroupingStatementEnter(node: any, parent: any, layer: any) {
    this.output += this.padStart(layer);
    this.output += `<grouping>\n`;
  }
  handleGroupingStatementExit(node: any, parent: any, layer: any) {
    this.output += this.padStart(layer);
    this.output += `</grouping>\n`;
  }
}
