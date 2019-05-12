import { ISymbolTable } from "../monolithic-scope/SymbolTable";

export class SyntaxNode {
  type: any = {};
  elements: any[];
  input: any;
  interval: any[] = [];
  initialization: any;
  name: any;
  parameters: any[] = [];
  body: any;

  constructor(elements?: any[]) {
    this.elements = elements || [];
  }

  walk(symbolTable: ISymbolTable) {
    const { elements } = this;
    if (!elements) return;
    elements.map((element: any) => element.walk(symbolTable));
  }

  get location() {
    return `line ${this.input.line_of(this.interval[0])}`;
  }
}
