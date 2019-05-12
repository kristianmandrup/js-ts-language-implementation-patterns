import { ISymbolTable } from "../monolithic-scope/SymbolTable";
import { SyntaxNode } from "./SyntaxNode";

export class CymbolBlock extends SyntaxNode {
  walk(symbolTable: ISymbolTable) {
    const { elements } = this;
    symbolTable.pushScope();
    elements.map((element: any) => element.walk(symbolTable));
  }
}
