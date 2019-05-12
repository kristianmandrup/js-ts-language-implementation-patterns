import { SyntaxNode } from "./SyntaxNode";
import { ISymbolTable } from "./SymbolTable";

export class VarExpression extends SyntaxNode {
  populateSymbols(symbolTable: ISymbolTable) {
    const { type, location } = this;
    symbolTable.resolve(type.name, location);
  }
}
