/**
 * lexical parser
 *
 */
const EOF = -1;
const EOF_TYPE = 1;

class Lexer {
  constructor(input) {
    this.INPUT = INPUT; // input string
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
  match(char) {
    //Check if the input char is the current this.char
    if (this.char === char) {
      this.consume();
    } else {
      throw new Error(`Expecting ${char}; Found ${this.char}`);
    }
  }
}

Lexer.EOF = EOF;
Lexer.EOF_TYPE = EOF_TYPE;

const NAME = 2;
const COMMA = 3;
const LBRACK = 4;
const RBRACK = 5;
const tokenNames = ["n/a", "<EOF>", "NAME", "COMMA", "LBRACK", "RBRACK"];
const getTokenName = index => tokenNames[index];

// Determine whether the input character is a letter, that is, between a-zA-Z
const isLetter = char =>
  (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

class ListLexer extends Lexer {
  constructor(input) {
    super(input);
  }
  isLetter() {
    return isLetter(this.char);
  }
  nextToken() {
    while (this.char !== EOF) {
      switch (this.char) {
        case " ":
        case "\t":
        case "\n":
        case "\r":
          this.WS();
          break;
        case ",":
          this.consume();
          return new Token(COMMA, ",");
        case "[":
          this.consume();
          return new Token(LBRACK, "[");
        case "]":
          this.consume();
          return new Token(RBRACK, "]");
        default:
          if (this.isLetter()) {
            return this.NAME();
          }
          throw new Error(`Invalid character: ${this.char}`);
      }
    }
    return new Token(EOF_TYPE, "<EOF>");
  }
  WS() {
    // Ignore all whitespace, newline, tab, carriage return, etc.
    while (
      this.char === " " ||
      this.char === "\t" ||
      this.char === "\n" ||
      this.char === "\r"
    ) {
      this.consume();
    }
  }
  NAME() {
    // matches a list of letters
    let name = "";
    while (this.isLetter()) {
      name += this.char;
      this.consume();
    }
    return new Token(NAME, name);
  }
}

class Token {
  constructor(type, text) {
    this.type = type;
    this.text = text;
  }
  toString() {
    let tokenName = tokenNames[this.type];
    return `<'${this.text}',${tokenName}>`;
  }
}

module.exports = ListLexer;
