import { AssemblerParser } from "./AssemblerParser";
import { Instruction } from "./Instruction";

const REG = AssemblerParser.REG;

export class BytecodeDefinition {
  public static REG = AssemblerParser.REG;
  public static FUNC = AssemblerParser.FUNC;
  public static INT = AssemblerParser.INT;
  public static POOL = 1000; // unique imaginary token

  // INSTRUCTION BYTECODES
  public static INSTR_ADD = 1;
  // ...

  /** Used for assembly/disassembly; describes instruction set */
  public static instructions: any[] = [
    null, // <INVALID>
    new Instruction("iadd", REG, REG, REG) // index is the opcode
  ];
}
