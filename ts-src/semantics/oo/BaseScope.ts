import { ISymbolMap } from "./ISymbolMap";
import { CodeSymbol } from "./CodeSymbol";
import { Scope } from "./Scope";

export abstract class BaseScope implements Scope {
  enclosingScope: Scope | null; // null if global (outermost) scope
  symbols: ISymbolMap = {};

  constructor(parent: Scope | null) {
    this.enclosingScope = parent;
  }

  resolve(name: string): CodeSymbol | null {
    const s = this.symbols[name];
    if (s != null) return s;
    const { enclosingScope } = this;
    // if not here, check any enclosing scope
    if (enclosingScope != null) return enclosingScope.resolve(name);
    return null; // not found
  }

  define(sym: CodeSymbol): void {
    this.symbols[sym.name] = sym;
    sym.scope = this; // track the scope in each symbol
  }

  getEnclosingScope(): Scope | null {
    return this.enclosingScope;
  }

  getScopeName(): string {
    return "unknown";
  }

  toString(): string {
    return Object.keys(this.symbols).toString();
  }
}
