import { LBRACK, RBRACK, COMMA, NAME, EQUALS } from "./Tokens";
import { Lexer, EOF, EOF_TYPE } from "./Lexer";
import { Token } from "./Token";

// Determine whether the input character is a letter, that is, between a-zA-Z
const isLetter = (char: string) =>
  (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

export class ListLexer extends Lexer {
  constructor(input: string) {
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
        case "=":
          this.consume();
          return new Token(EQUALS, "=");
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
