import { CodeSymbol } from "./CodeSymbol";
import { Scope } from "./Scope";

export interface Scope {
  getScopeName(): string;

  /** Where to look next for symbols;  */
  getEnclosingScope(): Scope;

  /** Define a symbol in the current scope */
  define(sym: CodeSymbol): void;

  /** Look up name in this scope or in enclosing scope if not here */
  resolve(name: string): CodeSymbol | null;
}