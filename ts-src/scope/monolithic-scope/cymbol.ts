import { SymbolTable } from "./SymbolTable";

export class Cymbol {
  symbolTable: SymbolTable;
  parser: any;

  constructor(symbolTable: SymbolTable, parser: any) {
    this.symbolTable = symbolTable;
    this.parser = parser;
  }

  parse(source: any) {
    const symbols = this.tree(source);
    this.populateSymbols(symbols);
  }

  tree(source: any) {
    this.parser.parse(source);
  }

  populateSymbols(tree: any) {
    tree.populate_symbols(this.symbolTable);
  }
}
