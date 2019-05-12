import { ScopedSymbol } from "./ScopedSymbol";
import { ISymbolMap } from "./ISymbolMap";
import { Type } from "./Type";
import { Scope } from "./Scope";

export class MethodSymbol extends ScopedSymbol {
  orderedArgs: ISymbolMap = {};

  constructor(name: string, parent: Scope, retType?: Type) {
    super(name, parent, retType);
  }

  getMembers(): ISymbolMap {
    return this.orderedArgs;
  }

  getName(): string {
    const keys = Object.keys(this.orderedArgs);
    return this.name + "(" + this.stripBrackets(keys.toString()) + ")";
  }
}
