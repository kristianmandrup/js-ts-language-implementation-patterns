import { CodeSymbol } from "./CodeSymbol";
import { Scope } from "./Scope";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

export abstract class ScopedSymbol extends CodeSymbol implements Scope {
  enclosingScope: Scope;

  constructor(name: string, enclosingScope: Scope) {
    super(name);
    this.enclosingScope = enclosingScope;
  }

  resolve(name: string): CodeSymbol | null {
    const s = this.getMembers().get(name);
    if (s != null) return s;
    // if not here, check any parent scope
    if (this.getParentScope() != null) {
      return this.getParentScope().resolve(name);
    }
    return null; // not found
  }

  define(sym: CodeSymbol) {
    this.getMembers().put(sym.name, sym);
    sym.scope = this; // track the scope in each symbol
  }

  public getParentScope(): Scope {
    return this.getEnclosingScope();
  }
  public getEnclosingScope(): Scope {
    return this.enclosingScope;
  }

  public getScopeName(): string {
    return this.name;
  }

  /** Indicate how subclasses store scope members. Allows us to
   *  factor out common code in this class.
   */
  public abstract getMembers(): any;
}
