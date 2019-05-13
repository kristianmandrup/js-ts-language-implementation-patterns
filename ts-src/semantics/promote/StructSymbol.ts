import { Type } from "./Type";
import { ISymbolMap } from "./ISymbolMap";
import { SymbolTable } from "./SymbolTable";
import { ScopedSymbol } from "./ScopedSymbol";
import { CodeSymbol } from "./CodeSymbol";
import { Scope } from "./Scope";

export class StructSymbol extends ScopedSymbol implements Type, Scope {
  fields: ISymbolMap = {};
  constructor(name: string, parent: Scope) {
    super(name, parent);
  }
  /** For a.b, only look in a only to resolve b, not up scope tree */
  public resolveMember(name: string): CodeSymbol | null {
    return this.fields[name];
  }
  public getMembers(): ISymbolMap {
    return this.fields;
  }
  public toString(): string {
    const keys = Object.keys(this.fields);
    return (
      "struct " + this.name + ":{" + this.stripBrackets(keys.toString()) + "}"
    );
  }
  public getTypeIndex(): number {
    return SymbolTable.tUSER;
  }
}
