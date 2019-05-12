import { Type } from "./Type";
import { CodeSymbol } from "./CodeSymbol";

export class BuiltInTypeSymbol extends CodeSymbol implements Type {
  typeIndex: number;
  constructor(name: string, typeIndex: number) {
    super(name);
    this.typeIndex = typeIndex;
  }
  public getTypeIndex(): number {
    return this.typeIndex;
  }
  public toString(): string {
    return this.getName();
  }
}
