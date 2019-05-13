import { CodeSymbol } from "./CodeSymbol";
import { Type } from "./Type";

export class ArrayType extends CodeSymbol implements Type {
  elementType: Type;
  constructor(elementType: Type) {
    super(elementType + "[]");
    this.elementType = elementType;
  }
  public getTypeIndex(): number {
    return 0;
  }
}
