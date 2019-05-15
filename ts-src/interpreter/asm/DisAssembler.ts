import { BytecodeDefinition } from "./BytecodeDefinition";
import { FunctionSymbol } from "./FunctionSymbol";

export class DisAssembler {
  code: number[];
  codeSize: number;
  constPool: any[];
  def?: BytecodeDefinition;

  constructor(code: number[], codeSize: number, constPool: any[]) {
    this.code = code;
    this.codeSize = codeSize;
    this.constPool = constPool;
  }

  disassemble() {
    console.log("Disassembly:\n");
    let i = 0;
    while (i < this.codeSize) {
      i = this.disassembleInstruction(i);
      console.log("\n");
    }
    console.log("\n");
  }

  disassembleInstruction(ip: number): number {
    const opcode = this.code[ip];
    const I = BytecodeDefinition.instructions[opcode];
    const instrName = I.name;
    // TODO: use fmt
    console.log("%04d:\t%-11s", ip, instrName);
    ip++;
    if (I.n == 0) {
      console.log("  ");
      return ip;
    }
    const operands: string[] = [];
    for (let i = 0; i < I.n; i++) {
      const opnd = 1; // BytecodeAssembler.getInt(code, ip);
      ip += 4;
      switch (I.type[i]) {
        case BytecodeDefinition.REG:
          operands.push("r" + opnd);
          break;
        case BytecodeDefinition.FUNC:
        case BytecodeDefinition.POOL:
          operands.push(this.showConstPoolOperand(opnd));
          break;
        case BytecodeDefinition.INT:
          operands.push(String(opnd));
          break;
      }
    }
    for (let i = 0; i < operands.length; i++) {
      const s = operands[i];
      if (i > 0) console.log(", ");
      console.log(s);
    }
    return ip;
  }

  showConstPoolOperand(poolIndex: number) {
    const buf = "";
    buf.concat("#");
    buf.concat(String(poolIndex));
    const { constPool } = this;
    let s = constPool[poolIndex].toString();
    if (constPool[poolIndex] instanceof String) s = '"' + s + '"';
    else if (constPool[poolIndex] instanceof FunctionSymbol) {
      const fs = constPool[poolIndex];
      s = fs.name + "()@" + fs.address;
    }
    buf.concat(":");
    buf.concat(s);
    return buf; //.toString();
  }
}
