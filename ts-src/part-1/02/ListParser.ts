import { LBRACK, RBRACK, COMMA, NAME, EQUALS } from "./tokens";
import { Parser } from "./Parser";

export class ListParser extends Parser {
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
