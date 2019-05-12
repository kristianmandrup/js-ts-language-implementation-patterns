const tokenNames = ["n/a", "<EOF>", "NAME", "COMMA", "LBRACK", "RBRACK"];
const getTokenName = (index: number) => tokenNames[index];

export class Token {
  type: any;
  text: string;

  constructor(type: any, text: string) {
    this.type = type;
    this.text = text;
  }
  toString() {
    let tokenName = getTokenName(this.type);
    return `<'${this.text}',${tokenName}>`;
  }
}
