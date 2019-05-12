export class LanguageSymbol {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  equals(other: any) {
    return other instanceof LanguageSymbol && this.name == other.name;
  }

  toString() {
    return this.name;
  }
}
