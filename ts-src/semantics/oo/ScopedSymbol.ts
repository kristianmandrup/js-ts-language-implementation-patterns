import { Type } from "./Type";
import { CodeSymbol } from "./CodeSymbol";
import { ISymbolMap } from "./ISymbolMap";
import { Scope } from "./Scope";

export abstract class ScopedSymbol extends CodeSymbol implements Scope {
  enclosingScope: Scope;

  constructor(name: string, enclosingScope: Scope, type?: Type) {
    super(name, type);
    this.enclosingScope = enclosingScope;
  }

  public resolve(name: string): CodeSymbol | null {
    const s = this.getMembers()[name];
    if (s != null) return s;
    // if not here, check any enclosing scope
    const enclosingScope = this.getEnclosingScope();
    if (enclosingScope != null) {
      return enclosingScope.resolve(name);
    }
    return null; // not found
  }

  public resolveType(name: string): CodeSymbol | null {
    return this.resolve(name);
  }

  define(sym: CodeSymbol): void {
    this.getMembers()[sym.name] = sym;
    sym.scope = this; // track the scope in each symbol
  }

  getEnclosingScope(): Scope {
    return this.enclosingScope;
  }

  getScopeName(): string {
    return this.name;
  }

  /** Indicate how subclasses store scope members. Allows us to
   *  factor out common code in this class.
   */
  public abstract getMembers(): ISymbolMap;
}
