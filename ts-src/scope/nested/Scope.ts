interface IMap {
  [key: string]: any;
}

export class Scope {
  symbols: IMap = {};
  parentScope: any = null;

  define(symbol: any) {
    this.symbols[symbol.name] = symbol;
  }

  resolve(name: string) {
    if (this.symbols.fetch(name)) {
      return this.parentScope.resolve(name);
    }
  }

  unwrap() {
    return this.parentScope;
  }
}
