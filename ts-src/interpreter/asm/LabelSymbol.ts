export class LabelSymbol {
  name: string;

  /** Address in code memory */
  address: number;

  /** Is this ref'd before def'd. */
  isForwardRef = false;

  /** Set when we see actual ID: definition */
  isDefined = true;

  /** List of operands in memory we need to update after seeing def */
  forwardReferences: any[] = [];

  constructor(name: string, address: number, forward: boolean) {
    this.name = name;
    this.address = address;
    this.isForwardRef = forward;
    if (forward) {
      // if forward reference, then address is address to update
      this.addForwardReference(address);
    } else {
      this.address = address;
    }
  }

  addForwardReference(address: number) {
    if (this.forwardReferences == null) {
      this.forwardReferences = [];
    }
    this.forwardReferences.push(address);
  }

  resolveForwardReferences(code: number[]) {
    this.isForwardRef = false;
    // need to patch up all references to this symbol
    const opndsToPatch = this.forwardReferences;
    for (let addrToPatch of opndsToPatch) {
      /*
      System.out.println("updating operand at addr "+
                  addr+" to be "+getAddress());
      */
      // BytecodeAssembler.writeInt(code, addrToPatch, address);
    }
  }

  public toString(): string {
    let refs = "";
    if (this.forwardReferences != null) {
      refs = "[refs=" + this.forwardReferences.toString() + "]";
    }
    return this.name + "@" + this.address + refs;
  }
}
