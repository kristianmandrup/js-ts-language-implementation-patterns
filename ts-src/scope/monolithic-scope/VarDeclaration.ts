import { SyntaxNode } from "./SyntaxNode";
import { VariableSymbol } from "./VariableSymbol";
import { ISymbolTable } from "./SymbolTable";

class VarDeclaration extends SyntaxNode {
  type: any;
  location: any;
  assignment: any;

  constructor(type: any) {
    super();
    this.type = type;
  }

  populateSymbols(symbolTable: ISymbolTable) {
    const { assignment, location } = this;
    const varType = symbolTable.resolve(this.type.name, location);
    const varName = {
      name: "x"
    };

    if (assignment) {
      assignment.populateSymbols(symbolTable);
    }

    const varSymbol = new VariableSymbol(varName.name, varType);
    symbolTable.define(varSymbol, location);
  }
}
