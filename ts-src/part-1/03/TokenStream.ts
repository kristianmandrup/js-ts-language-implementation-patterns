import { CharStream } from "./CharStream";
import { Token } from "./Token";
import { getCharPattern } from "./util";

export class TokenStream {
  charStream: CharStream;
  index: number;
  token: Token | null;

  constructor(input: string) {
    this.charStream = new CharStream(input);
    this.index = 0;
    this.token = null;
  }
  isEnd() {
    return this.charStream.isEnd();
  }
  current() {
    return this.token;
  }
  next(): Token | null {
    if (this.isEnd()) {
      return null;
    }
    let char = this.charStream.current();
    let { type, match } = getCharPattern(char);
    this.token = this.createToken(type, match);
    return this.current();
  }

  createToken(type: string, match: Function) {
    let { charStream } = this;
    let text = "";
    let char: any = charStream.current();
    while (!charStream.isEnd() && match(char)) {
      text += char;
      char = charStream.next();
    }
    return new Token(type, text);
  }
}
