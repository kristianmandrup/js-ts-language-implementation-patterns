/**
 * lexical parser
 * Supports LL(k), k > 1 on the basis of 01.js. Recursive descent analysis
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
const EQUALS = 6;
const tokenNames = [
  "n/a",
  "<EOF>",
  "NAME",
  "COMMA",
  "LBRACK",
  "RBRACK",
  "EQUALS"
];
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

class Parser {
  Constructor(lexer, k) {
    // lexer lexical instance of the class, k forward read the number of tokens
    this.lexer = lexer;
    this.k = k;
    this.index = 0;
    this.lookahead = Array.from(Array(k)); // 预读 token 列表
    This.lookahead.forEach(() => {
      // call the consume method to populate the list
      this.consume();
    });
  }
  consume() {
    this.lookahead[this.index] = this.lexer.nextToken();
    this.index = (this.index + 1) % this.k;
  }
  getToken(n) {
    let index = (this.index + n - 1) % this.k;
    return this.lookahead[index];
  }
  getTokenType(n) {
    return this.getToken(n).type;
  }
  match(type) {
    let tokenType = this.getTokenType(1);
    if (tokenType === type) {
      this.consume();
    } else {
      throw new Error(
        `Expecting ${getTokenName(type)}; Found ${this.getToken()}`
      );
    }
  }
}

class ListParser extends Parser {
  list() {
    this.match(LBRACK);
    this.elements();
    this.match(RBRACK);
  }
  elements() {
    this.element();
    while (this.getTokenType(1) === COMMA) {
      this.match(COMMA);
      this.element();
    }
  }
  element() {
    let tokenType1 = this.getTokenType(1);
    let tokenType2 = this.getTokenType(2);

    if (tokenType1 === NAME && tokenType2 === EQUALS) {
      this.match(NAME);
      this.match(EQUALS);
      this.match(NAME);
    } else if (tokenType1 === NAME) {
      this.match(NAME);
    } else if (tokenType1 === LBRACK) {
      this.list();
    } else {
      throw new Error(`Expecting name or list; Found ${this.getToken(1)}`);
    }
  }
}

exports.ListLexer = ListLexer;
exports.ListParser = ListParser;
