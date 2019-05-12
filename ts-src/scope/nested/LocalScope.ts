export class LocalScope extends Scope {
  constructor(parentScope?: any) {
    super();
    this.parentScope = parentScope;
    this.symbols = {};
  }

  toString() {
    return `symbols: {${this.keyValuePairs.join(", ")}}`;
  }

  get keyValuePairs() {
    return this.symbols.keys
      .sort()
      .map((key: string) => "#{key}=#{this.symbols[key]}");
  }
}
