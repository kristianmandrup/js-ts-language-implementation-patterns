import { LocalScope } from "./LocalScope";
import { DeadEndScope } from "./DeadEndScope";
export class SymbolTable {
  scope: Scope;

  constructor() {
    this.scope = new LocalScope(new DeadEndScope());
  }

  pushScope() {
    this.scope = new LocalScope(this.scope);
  }

  popScope() {
    this.scope = this.scope.unwrap();
  }

  define(symbol: any, metadata: any = {}) {
    this.scope.define(symbol);
  }

  defineAsScope(symbol: any, metadata: any = {}) {
    this.define(symbol);
    symbol.wrap(this.scope);
    this.scope = symbol;
  }

  resolve(name: string, metadata: any = {}) {
    this.scope.resolve(name);
  }

  toString() {
    this.scope.toString();
  }
}
