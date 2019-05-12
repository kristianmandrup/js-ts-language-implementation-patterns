import { ISymbolTable } from "../monolithic-scope/SymbolTable";
import { SyntaxNode } from "./SyntaxNode";

export class CymbolSymbol extends SyntaxNode {
  textValue: string = "";

  get name() {
    return this.textValue;
  }

  walk(symbolTable: ISymbolTable) {
    const { name, location } = this;
    symbolTable.resolve(name, location);
  }
}
