import { Character } from "./Character";
import { Token } from "./Token";
import {
  NUMBER,
  OPERAND,
  PARENTHESE,
  PLUS_SIGN,
  MINUS_SIGN,
  DOT
} from "./tokens";

export class Tokenizer {
  input: string;
  output: any[];
  index: number;
  character: Character | null;

  constructor(input: string, output: any[] = []) {
    this.input = input;
    this.output = output;
    this.index = 0;
    this.character = null;
  }

  charValue() {
    return this.character ? this.character.value : null;
  }

  isNotEnd() {
    return this.index < this.input.length;
  }
  next() {
    if (this.isNotEnd()) {
      return new Character(this.input[this.index++]);
    } else {
      return null;
    }
  }
  peek(n = 0) {
    if (this.index + n < this.input.length) {
      return new Character(this.input[this.index + n]);
    } else {
      return null;
    }
  }
  consume() {
    let character = this.next();
    while (character && character.isWhiteSpace()) {
      character = this.next();
    }
    this.character = character;
    return !!this.character;
  }
  createToken(type: number) {
    return new Token(type, this.index - 1);
  }
  handleNumber() {
    let token = this.createToken(NUMBER);
    if (this.character) {
      token.add(this.character.value);
    }

    let nextToken = this.peek();

    while (nextToken && (nextToken.isDigit() || nextToken.isDot())) {
      const char = this.next();
      if (char) {
        token.add(char.value);
      }
      nextToken = this.peek();
    }

    if (token.value.split(".").filter(item => item === DOT).length > 1) {
      throw new Error(" Illegal number ");
    }

    this.output.push(token);
  }
  handleOperand() {
    let token = this.createToken(OPERAND);
    token.add(this.charValue);
    this.output.push(token);
  }
  handleParenthese() {
    let token = this.createToken(PARENTHESE);
    token.add(this.charValue);
    this.output.push(token);
  }
  execute() {
    while (this.isNotEnd()) {
      if (!this.consume()) {
        return this.output;
      }

      let character = this.character;
      if (!character) continue;

      let isDigit = character.isDigit();
      if (isDigit) {
        this.handleNumber();
        continue;
      }

      let isOperand = character.isOperand();
      const peek = this.peek();
      let isDigitWithOperand =
        (character.value === PLUS_SIGN || character.value === MINUS_SIGN) &&
        (peek && peek.isDigit());

      if (isDigitWithOperand) {
        this.handleNumber();
        continue;
      }

      if (isOperand) {
        this.handleOperand();
        continue;
      }

      let isParenthese =
        character.isLeftParenthese() || character.isRightParenthese();
      if (isParenthese) {
        this.handleParenthese();
        continue;
      }
    }

    return this.output;
  }
}
