export class CharStream {
  input: string;
  index: number;

  constructor(input: string) {
    this.input = input;
    this.index = 0;
  }
  current() {
    return this.input[this.index];
  }
  next() {
    if (this.isEnd()) {
      return;
    }
    this.index += 1;
    return this.current();
  }
  test(char: string) {
    return char === this.current();
  }
  isEnd() {
    return this.index >= this.input.length;
  }
}
