import { ListLexer } from "./ListLexer";
import { Token } from "./Token";
import { getTokenName } from "./tokens";

export class Parser {
  lexer: ListLexer;
  k: number;
  index: number;
  lookahead: Token[];

  constructor(lexer: ListLexer, k: number) {
    // lexer lexical instance of the class, k forward read the number of tokens
    this.lexer = lexer;
    this.k = k;
    this.index = 0;
    this.lookahead = Array.from(Array(k)); // 预读 token 列表
    this.lookahead.forEach(() => {
      // call the consume method to populate the list
      this.consume();
    });
  }

  consume() {
    this.lookahead[this.index] = this.lexer.nextToken();
    this.index = (this.index + 1) % this.k;
  }

  getToken(n: number = 0): Token {
    let index = (this.index + n - 1) % this.k;
    return this.lookahead[index];
  }

  getTokenType(n: number = 0): number {
    return this.getToken(n).type;
  }

  match(type: number) {
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
