import { StackFrame } from './StackFrame'
import { FileInputStream } from './FileInputStream';
import { DisAssembler } from '../asm/DisAssembler'
import { BytecodeAssembler } from '../asm/BytecodeAssembler'
import { BytecodeDefinition } from '../asm/BytecodeDefinition'
import { AssemblerLexer } from '../asm/AssemblerLexer'

const DEFAULT_OPERAND_STACK_SIZE = 100;
const DEFAULT_CALL_STACK_SIZE = 1000;

const System = {
  in: ""
}

export class Interpreter {
  public static DEFAULT_OPERAND_STACK_SIZE = DEFAULT_OPERAND_STACK_SIZE;
  public static DEFAULT_CALL_STACK_SIZE = DEFAULT_CALL_STACK_SIZE;

  disasm: DisAssembler;

  ip: number = 0;             // instruction pointer register
  code: number[] = [];        // byte-addressable code memory.
  codeSize: number = 0;
  globals: any[] = [];   // global variable space
  protected constPool: any[] = [];

  /** Operand stack, grows upwards */
  operands: any[] = [];
  sp: number = -1;        // stack pointer register

  /** Stack of stack frames, grows upwards */
  calls: StackFrame[] = [];
  fp: number = -1;        // frame pointer register
  mainFunction?: FunctionSymbol;    

  _trace: boolean = false;

  static main(args: string[]) {
      // PROCESS ARGS
      let trace = false;
      let disassemble = false;
      let dump = false;
      let filename = null;
      let i = 0;
      while ( i< args.length ) {
          if ( args[i] === "-trace" ) { trace = true; i++; }
          else if ( args[i] === "-dis" ) { disassemble = true; i++; }
          else if ( args[i] === "-dump" ) { dump = true; i++; }
          else { filename = args[i]; i++; }
      }

      let input = null;
      if ( filename!=null ) {
        input = new FileInputStream(filename);
      }
      else {
        input = System.in
      };

      const interpreter = new Interpreter();
      this.load(interpreter, input);
      interpreter._trace = trace;
      interpreter.exec();
      if ( disassemble ) interpreter.disassemble();
      if ( dump) interpreter.coredump();
  }

  public static load(interp: Interpreter, input: InputStream): boolean  {
      let hasErrors = false;
      try {
          const assemblerLexer =
              new AssemblerLexer(new ANTLRInputStream(input));
              const tokens = new CommonTokenStream(assemblerLexer);
              const assembler =
              new BytecodeAssembler(tokens, BytecodeDefinition.instructions);
          assembler.program();
          interp.code = assembler.getMachineCode();
          interp.codeSize = assembler.getCodeMemorySize();
          interp.constPool = assembler.getConstantPool();
          interp.mainFunction = assembler.getMainFunction();
          interp.globals = new Object[assembler.getDataSize()];
          interp.disasm = new DisAssembler(interp.code,
                                           interp.codeSize,
                                           interp.constPool);
          hasErrors = assembler.getNumberOfSyntaxErrors()>0;
      }
      finally {
          input.close();
      }
      return hasErrors;
  }

  /** Execute the bytecodes in code memory starting at mainAddr */
  exec(): void {
      // SIMULATE "call main()"; set up stack as if we'd called main()
      if ( mainFunction==null ) {
          mainFunction = new FunctionSymbol("main", 0, 0, 0);
      }
      StackFrame f = new StackFrame(mainFunction, -1);
      calls[++fp] = f;
      ip = mainFunction.address;
      cpu();
  }

  /** Simulate the fetch-execute cycle */
  protected cpu(): void {
      let { operands, sp, calls, ip, globals, code, codeSize, call } = this    
      let v=null; // some locals to reuse
      let a,b;
      let e,f;
      let addr = 0;
      let opcode = code[ip];

      while (opcode!= BytecodeDefinition.INSTR_HALT && ip < codeSize) {
          if ( this._trace ) this.trace();
          this.ip++; //jump to next instruction or first byte of operand
          switch (opcode) {
              case BytecodeDefinition.INSTR_IADD :
                  a = operands[sp-1]; // 1st opnd 1 below top
                  b = operands[sp];   // 2nd opnd at top of stack
                  sp -= 2;                     // pop both operands
                  operands[++sp] = a + b;      // push result
                  break;
              case BytecodeDefinition.INSTR_ISUB :
                  a = operands[sp-1];
                  b = operands[sp];
                  sp -= 2;
                  operands[++sp] = a - b;
                  break;
              case BytecodeDefinition.INSTR_IMUL:
                  a = operands[sp-1];
                  b = operands[sp];
                  sp -= 2;
                  operands[++sp] = a * b;
                  break;
              case BytecodeDefinition.INSTR_ILT :
                  a = operands[sp-1];
                  b = operands[sp];
                  sp -= 2;
                  operands[++sp] = a < b;
                  break;
              case BytecodeDefinition.INSTR_IEQ :
                  a = operands[sp-1];
                  b = operands[sp];
                  sp -= 2;
                  operands[++sp] = a == b;
                  break;
              case BytecodeDefinition.INSTR_FADD :
                  e = operands[sp-1];
                  f = operands[sp];
                  sp -= 2;
                  operands[++sp] = e + f;
                  break;
              case BytecodeDefinition.INSTR_FSUB :
                  e = operands[sp-1];
                  f = operands[sp];
                  sp -= 2;
                  operands[++sp] = e - f;
                  break;
              case BytecodeDefinition.INSTR_FMUL:
                  e = operands[sp-1];
                  f = operands[sp];
                  sp -= 2;
                  operands[++sp] = e * f;
                  break;
              case BytecodeDefinition.INSTR_FLT :
                  e = operands[sp-1];
                  f = operands[sp];
                  sp -= 2;
                  operands[++sp] = e < f;
                  break;
              case BytecodeDefinition.INSTR_FEQ :
                  e = operands[sp-1];
                  f = operands[sp];
                  sp -= 2;
                  operands[++sp] = e == f;
                  break;
              case BytecodeDefinition.INSTR_ITOF :
                  a = operands[sp--];
                  operands[++sp] = a;
                  break;
              case BytecodeDefinition.INSTR_CALL :
                  const funcIndexInConstPool = this.getIntOperand();
                  call(funcIndexInConstPool);
                  break;
              case BytecodeDefinition.INSTR_RET : // result is on op stack
                  StackFrame fr = calls[fp--];    // pop stack frame
                  ip = fr.returnAddress;          // branch to ret addr
                  break;
              case BytecodeDefinition.INSTR_BR :
                  ip = this.getIntOperand();
                  break;
              case BytecodeDefinition.INSTR_BRT :
                  addr = this.getIntOperand();
                  if ( operands[sp--].equals(true) ) ip = addr;
                  break;
              case BytecodeDefinition.INSTR_BRF :
                  addr = this.getIntOperand();
                  if ( operands[sp--].equals(false) ) ip = addr;
                  break;
              case BytecodeDefinition.INSTR_CCONST :
                  operands[++sp] = this.getIntOperand();
                  break;
              case BytecodeDefinition.INSTR_ICONST :
                  operands[++sp] = this.getIntOperand(); // push operand
                  break;
              case BytecodeDefinition.INSTR_FCONST :
              case BytecodeDefinition.INSTR_SCONST :
                  const constPoolIndex = this.getIntOperand();
                  operands[++sp] = constPool[constPoolIndex];
                  break;
              case BytecodeDefinition.INSTR_LOAD : // load from call stack
                  addr = this.getIntOperand();
                  operands[++sp] = calls[fp].locals[addr];
                  break;
              case BytecodeDefinition.INSTR_GLOAD :// load from global memory
                  addr = this.getIntOperand();
                  operands[++sp] = globals[addr];
                  break;
              case BytecodeDefinition.INSTR_FLOAD:
                  let struct = (StructSpace)operands[sp--];
                  const fieldOffset = this.getIntOperand();
                  operands[++sp] = struct.fields[fieldOffset];
                  break;
              case BytecodeDefinition.INSTR_STORE :
                  addr = this.getIntOperand();
                  calls[fp].locals[addr] = operands[sp--];
                  break;
              case BytecodeDefinition.INSTR_GSTORE :
                  addr = this.getIntOperand();
                  globals[addr] = operands[sp--];
                  break;
              case BytecodeDefinition.INSTR_FSTORE:
                  const struct = operands[sp--];
                  v = operands[sp--];
                  fieldOffset = this.getIntOperand();
                  struct.fields[fieldOffset] = v;
                  break;
              case BytecodeDefinition.INSTR_PRINT :
                  this.println(operands[sp--]);
                  break;
              case BytecodeDefinition.INSTR_STRUCT :
                  const nfields = this.getIntOperand();
                  operands[++sp] = new StructSpace(nfields);
                  break;
              case BytecodeDefinition.INSTR_NULL :
                  operands[++sp] = null;
                  break;
              case BytecodeDefinition.INSTR_POP :
                  --sp;
                  break;
              default :
                  throw new Error("invalid opcode: "+opcode+" at ip="+(ip-1));
          }
          opcode = code[ip];
      }
  }

  protected call(functionConstPoolIndex: number): void  {
      const fs = this.constPool[functionConstPoolIndex];
      const f = new StackFrame(fs, this.ip);
      this.calls[++this.fp] = f; // push new stack frame for parameters and locals
      // move args from operand stack to top frame on call stack
      for (let a=fs.nargs-1; a>=0; a--) { f.locals[a] = this.operands[sp--]; }
      this.ip = fs.address; // branch to function
  }

  /** Pull off 4 bytes starting at ip and return 32-bit signed int value.
   *  Return with ip pointing *after* last byte of operand.  The byte-order
   *  is high byte down to low byte, left to right.
   */
  protected getIntOperand(): number {
      const word = BytecodeAssembler.getInt(this.code, this.ip);
      this.ip += 4;
      return word;
  }

  // Tracing, dumping, ...
  
  public disassemble(): void { this.disasm.disassemble(); }

  print(msg: string) {
    console.log(msg)
  } 

  println(msg: string = "") {
    console.log(msg + "\n")
  } 

  printf(msg: string = "", ...args: any[]) {
    console.log(msg + "\n")
  } 


  protected trace(): void {
      this.disasm.disassembleInstruction(this.ip);
      this.print("\tstack=[");

      for (let i = 0; i <= this.sp; i++) {
          const o = this.operands[i];
          this.print(" "+o);
      }
      this.print(" ]");
      if ( this.fp>=0 ) {
          this.print(", calls=[");
          for (let i = 0; i <= this.fp; i++) {
              this.print(" "+ this.calls[i].sym.name);
          }
          this.print(" ]");
      }
      this.println();
  }

  public coredump(): void {
      if ( this.constPool.length>0 ) this.dumpConstantPool();
      if ( this.globals.length>0 ) this.dumpDataMemory();
      this.dumpCodeMemory();
  }

  protected  dumpConstantPool(): void {
      this.println("Constant pool:");
      let addr = 0;
      for (let o of this.constPool) {
          if ( o instanceof String ) {
              this.printf("%04d: \"%s\"\n", addr, o);
          }
          else {
              this.printf("%04d: %s\n", addr, o);
          }
          addr++;
      }
      this.println();
  }

  protected dumpDataMemory(): void {
      this.println("Data memory:");
      let addr = 0;
      for (let o of this.globals) {
          if ( o!=null ) {
              this.printf("%04d: %s <%s>\n",
                                addr, o, o.getClass().getSimpleName());
          }
          else {
              this.printf("%04d: <null>\n", addr);
          }
          addr++;
      }
      this.println();
  }

  public dumpCodeMemory(): void {
      this.println("Code memory:");
      for (int i=0; code!=null && i<codeSize; i++) {
          if ( i%8==0 && i!=0 ) this.println();
          if ( i%8==0 ) this.printf("%04d:", i);
          this.printf(" %3d", ((int)code[i]));
      }
      this.println();
  }
}
