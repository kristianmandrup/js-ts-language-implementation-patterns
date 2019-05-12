import { ISymbolTable } from "../monolithic-scope/SymbolTable";
import { SyntaxNode } from "./SyntaxNode";
import { VariableSymbol } from "../monolithic-scope/VariableSymbol";
import { MethodSymbol } from "./MethodSymbol";

export class MethodDefinition extends SyntaxNode {
  walk(symbolTable: ISymbolTable) {
    const { location, type, name, parameters, body } = this;

    const methodType = symbolTable.resolve(type.name, location);
    const methodSymbol = new MethodSymbol(name.name, methodType);
    symbolTable.defineAsScope(methodSymbol, location);

    parameters.map((parameter: any) => {
      const parameterType = symbolTable.resolve(parameter.type.name, location);
      const varSymbol = new VariableSymbol(parameter.name.name, parameterType);
      symbolTable.define(varSymbol, location);
    });

    body.walk(symbolTable);
  }
}
