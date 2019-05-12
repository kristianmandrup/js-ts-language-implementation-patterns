import { TokenStream } from "./TokenStream";
import { Token } from "./Token";

export class SyntaxStream {
  tokenStream: TokenStream;
  tokens: Token[];
  index: number;

  constructor(input: string) {
    this.tokenStream = new TokenStream(input);
    this.tokens = [];
    this.index = 0;
  }
  isEnd() {
    return this.tokenStream.isEnd();
  }
  getCurrentToken() {
    return this.tokens[this.index];
  }
  getNextToken() {
    if (this.isEnd()) {
      return;
    }
    let token: any = this.tokenStream.next();
    this.tokens.push(token);
    return token;
  }
  isClassSelector() {
    let offset = 0;
    let currentToken = this.getCurrentToken();
    if (currentToken.type === "DOT") {
    }
  }
}
