import { ScopedSymbol } from "./ScopedSymbol";
import { CodeSymbol } from "./CodeSymbol";
import { ISymbolMap } from "./ISymbolMap";
import { Type } from "./Type";
import { Scope } from "./Scope";

export class ClassSymbol extends ScopedSymbol implements Scope, Type {
  /** This is the superclass not enclosingScope field. We still record
   *  the enclosing scope so we can push in and pop out of class defs.
   */
  superClass?: ClassSymbol;
  /** List of all fields and methods */
  public members: ISymbolMap = {};

  constructor(name: string, enclosingScope: Scope, superClass: ClassSymbol) {
    super(name, enclosingScope);
    this.superClass = superClass;
  }

  public getParentScope(): Scope | undefined {
    if (this.name === "Object") return this.enclosingScope; // globals
    return this.superClass; // if not Object, return super
  }

  /** For a.b, only look in a's class hierarchy to resolve b, not globals */
  public resolveMember(name: string): CodeSymbol | null {
    const { members, superClass } = this;
    const s = members[name];
    if (s != null) return s;
    // if not here, check any enclosing scope
    if (superClass != null) {
      return superClass.resolveMember(name);
    }
    return null; // not found
  }

  public getMembers(): ISymbolMap {
    return this.members;
  }
  public toString(): string {
    const keys = Object.keys(this.members);
    return (
      "class " + this.name + ":{" + this.stripBrackets(keys.toString()) + "}"
    );
  }

  public getTypeIndex(): number {
    return 0;
  }
}
