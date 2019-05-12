export class VariableSymbol {
  name: string;
  type: number;

  constructor(name: string, type: number) {
    this.name = name;
    this.type = type;
  }

  equals(other: VariableSymbol) {
    return (
      other instanceof VariableSymbol &&
      this.name == other.name &&
      this.type == other.type
    );
  }

  toString() {
    return `<${this.name}:${this.type}>`;
  }
}
