export const EOF = -1;
export const EOF_TYPE = 1;

export class Lexer {
  input: string;
  index: number;
  char: any;

  static EOF = EOF;
  static EOF_TYPE = EOF_TYPE;

  constructor(input: string) {
    this.input = input; // input string
    this.index = 0; // index position of the current string
    this.char = input[this.index]; // current character
  }
  consume() {
    // move one character forward
    this.index += 1;
    if (this.index >= this.input.length) {
      //Just judge if it is at the end
      this.char = EOF;
    } else {
      this.char = this.input[this.index];
    }
  }
  match(char: string) {
    //Check if the input char is the current this.char
    if (this.char === char) {
      this.consume();
    } else {
      throw new Error(`Expecting ${char}; Found ${this.char}`);
    }
  }
}
