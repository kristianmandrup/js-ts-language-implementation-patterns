export class Instruction {
  name: string; // E.g., "iadd", "call"
  type: number[] = [0, 0, 0];
  n: number = 0;

  constructor(name: string, a: number = 0, b: number = 0, c: number = 0) {
    this.name = name;
    this.type[0] = a;
    this.type[1] = b;
    this.type[2] = c;
    let n = 3;
    if (a == 0 && b == 0 && c == 0) {
      n = 0;
    }
    if (a == 0 && b == 0) {
      n = 1;
    }
    if (a == 0) {
      n = 2;
    }
    this.n = n;
  }
}
