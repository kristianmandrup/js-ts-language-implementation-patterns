export class StackFrame {
  sym: FunctionSymbol; // associated with which function?
  returnAddress: number; // the instruction following the call
  locals: any[] = []; // holds parameters and local variables

  constructor(sym: FunctionSymbol, returnAddress: number) {
    this.sym = sym;
    this.returnAddress = returnAddress;
    this.locals = [sym.nargs + sym.nlocals];
  }
}
