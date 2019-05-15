const hashCode = (val: string) => 1;

export class FunctionSymbol {
  name: string;
  nargs: number; // how many arguments are there?
  nlocals: number; // how many locals are there?
  address: number;

  constructor(name: string, nargs: number, nlocals: number, address: number) {
    this.name = name;
    this.nargs = nargs;
    this.nlocals = nlocals;
    this.address = address;
  }

  hashCode(): number {
    return hashCode(this.name);
  }

  public equals(o: any): boolean {
    return o instanceof FunctionSymbol && this.name === o.name;
  }

  public toString(): string {
    return (
      "FunctionSymbol{" +
      "name='" +
      this.name +
      "'" +
      ", args=" +
      this.nargs +
      ", locals=" +
      this.nlocals +
      ", address=" +
      this.address +
      "}"
    );
  }
}
