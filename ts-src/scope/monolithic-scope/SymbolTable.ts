export interface ISymbolTable {
  resolve: (name: string, location: any) => any;
  define: (varSymbol: any, location: any) => void;
  defineAsScope: (methodSymbol: any, location: any) => void;
  pushScope: (symbol?: any) => void;
  popScope(): () => any;
}

export class SymbolTable {
  symbols: any = {};

  constructor() {}

  define(symbol: any, metadata: any = {}) {
    this.symbols[symbol.name] = symbol;
  }

  resolve(name: string, metadata: any = {}) {
    try {
      return this.symbols.fetch(name);
    } catch (err) {
      throw "Unknown symbol: #{name}";
    }
  }

  toString() {
    const globals = this.keyValuePairs.join(", ");
    return `globals: ${globals}`;
  }

  get keyValuePairs() {
    return Object.keys(this.symbols)
      .sort()
      .map(key => "${key}=${this.symbols[key]}");
  }
}
