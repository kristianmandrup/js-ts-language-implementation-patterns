import { ISymbolTable } from "../monolithic-scope/SymbolTable";
import { SyntaxNode } from "./SyntaxNode";
import { VariableSymbol } from "../monolithic-scope/VariableSymbol";
export class VarDeclaration extends SyntaxNode {
  walk(symbolTable: ISymbolTable) {
    const { type, location, initialization } = this;
    const varType = symbolTable.resolve(type.name, location);
    const varName = {
      name: "x"
    };

    if (initialization) {
      initialization.walk(symbolTable);
    }
    const varSymbol = new VariableSymbol(varName.name, varType);
    symbolTable.define(varSymbol, location);
  }
}
