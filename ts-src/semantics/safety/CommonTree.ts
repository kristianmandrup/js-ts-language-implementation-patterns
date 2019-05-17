import { Token } from "./Token";

export class CommonTree {
  token: Token;

  constructor(t: Token) {
    this.token = t;
  }

  getParent(): CommonTree {
    return new CommonTree(new Token());
  }

  getChild(id: any): CommonTree {
    return new CommonTree(new Token());
  }

  getText(): string {
    return "";
  }

  getTokenStartIndex(): string {
    return "1";
  }

  getTokenStopIndex(): string {
    return "2";
  }
}
