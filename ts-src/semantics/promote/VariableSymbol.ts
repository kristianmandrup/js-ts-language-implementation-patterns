import { CodeSymbol } from "./CodeSymbol";
import { Type } from "./Type";

export class VariableSymbol extends CodeSymbol {
  constructor(name: string, type: Type) {
    super(name, type);
  }
}
