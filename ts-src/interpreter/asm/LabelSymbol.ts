public class LabelSymbol {
  String name;

  /** Address in code memory */
  int address;

  /** Is this ref'd before def'd. */
  boolean isForwardRef = false;

  /** Set when we see actual ID: definition */
  boolean isDefined = true;

  /** List of operands in memory we need to update after seeing def */
  Vector<Integer> forwardReferences = null;

  public LabelSymbol(String name) {
    this.name = name;
  }

  public LabelSymbol(String name, int address) {
      this(name);
      this.address = address;
  }

  public LabelSymbol(String name, int address, boolean forward) {
      this(name);
      isForwardRef = forward;
      if ( forward ) {
          // if forward reference, then address is address to update
          addForwardReference(address);
      }
      else {
          this.address = address;
      }
  }

  public void addForwardReference(int address) {
      if ( forwardReferences==null ) {
          forwardReferences = new Vector<Integer>();
      }
      forwardReferences.addElement(new Integer(address));
  }

  public void resolveForwardReferences(byte[] code) {
      isForwardRef = false;
      // need to patch up all references to this symbol
      Vector<Integer> opndsToPatch = forwardReferences;
      for (int addrToPatch : opndsToPatch) {
          /*
      System.out.println("updating operand at addr "+
                  addr+" to be "+getAddress());
      */
          BytecodeAssembler.writeInt(code, addrToPatch, address);
      }
  }

  public String toString() {
      String refs = "";
      if ( forwardReferences!=null ) {
          refs = "[refs="+forwardReferences.toString()+"]";
      }
      return name+"@"+address+refs;
  }
}
