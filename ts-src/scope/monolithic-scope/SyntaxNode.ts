import { SymbolTable } from "./SymbolTable";
export class SyntaxNode {
  type: any = {};
  elements: any[];
  input: any;
  interval: any[] = [];

  constructor(elements?: any[]) {
    this.elements = elements || [];
  }

  populateSymbols(symbolTable: SymbolTable) {
    const { elements } = this;
    if (!elements) return;
    elements.map(element => element.populateSymbols(symbolTable));
  }

  get location() {
    return `line ${this.input.lineOf(this.interval[0])}`;
  }
}
