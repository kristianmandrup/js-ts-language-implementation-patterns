import { SyntaxNode } from "./SyntaxNode";
import { ISymbolTable } from "./SymbolTable";

export class CymbolSymbol extends SyntaxNode {
  textValue: string = "";

  constructor() {
    super();
  }

  get name() {
    return this.textValue;
  }

  populateSymbols(symbolTable: ISymbolTable) {
    symbolTable.resolve(this.name, this.location);
  }
}
