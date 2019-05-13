/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

// TODO: md5 or similar?
const hashCodeOf = (val: string) => val;

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

  public hashCode(): number {
    return hashCodeOf(this.name);
  }

  public equals(o: any): boolean {
    return o instanceof FunctionSymbol && this.name === o.name;
  }

  toString(): string {
    const { name, nargs, nlocals, address } = this;
    return (
      "FunctionSymbol{" +
      "name='" +
      name +
      "'" +
      ", args=" +
      nargs +
      ", locals=" +
      nlocals +
      ", address=" +
      address +
      "}"
    );
  }
}
