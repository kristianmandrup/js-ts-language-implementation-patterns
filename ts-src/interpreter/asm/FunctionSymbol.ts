public class FunctionSymbol {
  String name;
  int nargs; // how many arguments are there?
  int nlocals; // how many locals are there?
  int address;

  public FunctionSymbol(String name) { this.name = name; }    

  public FunctionSymbol(String name, int nargs, int nlocals, int address) {
      this.name = name;
      this.nargs = nargs;
      this.nlocals = nlocals;
      this.address = address;
  }

  @Override
  public int hashCode() { return name.hashCode(); }

  @Override
  public boolean equals(Object o) {
      return o instanceof FunctionSymbol && name.equals(((FunctionSymbol)o).name);
  }

  @Override
  public String toString() {
      return "FunctionSymbol{" +
             "name='" + name + '\'' +
             ", args=" + nargs +
             ", locals=" + nlocals +
             ", address=" + address +
             '}';
  }
}
