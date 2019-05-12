export class MethodSymbol extends Scope {
  name: string;
  type: any;

  constructor(name: string, type: any) {
    super();
    this.name = name;
    this.type = type;
    this.symbols = {}; // Hackety hackety hack
  }

  equals(other: any) {
    return (
      other instanceof MethodSymbol &&
      this.name == other.name &&
      this.type == other.type
    );
  }

  wrap(parentScope: any) {
    this.parentScope = parentScope;
  }

  toString() {
    return `method<${this.name}:${this.type}>`;
  }
}
