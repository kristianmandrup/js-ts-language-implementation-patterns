import { SymbolTable } from "./SymbolTable";

interface ISymbolTable {
  defineAsScope: (symbol: any) => void;
  resolve: (symbol: any) => any;
  define: (symbol: any) => void;
  push: (symbol?: any) => void;
  pop: () => any;
}

export class SymbolTableLogger {
  io: any;
  symbolTable: ISymbolTable;

  constructor(symbolTable: ISymbolTable, io: any) {
    this.symbolTable = symbolTable;
    this.io = io;
  }

  resolve(name: string, metadata = {}) {
    try {
      const symbol = this.symbolTable.resolve(name);
      this.log("ref", symbol, metadata);
    } catch (err) {
      this.log("ref [failed]", name, metadata);
    }
  }

  define(symbol: any, metadata: any = {}) {
    this.log("def", symbol, metadata);
    this.symbolTable.define(symbol);
  }

  define_as_scope(symbol: any, metadata: any = {}) {
    this.log("defscope", symbol, metadata);
    this.symbolTable.defineAsScope(symbol);
  }

  pushScope() {
    this.symbolTable.push();
  }

  popScope() {
    this.symbolTable.pop();
  }

  log(event: any, item: any, metadata: any) {
    this.io.log(`${metadata}: ${event} ${item}`);
  }
}
