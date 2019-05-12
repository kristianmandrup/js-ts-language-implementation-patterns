import { tokenNames } from "./tokens";

export class Token {
  public type: number;
  public text?: string;

  constructor(type: number, text: string) {
    this.type = type;
    this.text = text;
  }
  toString() {
    let tokenName = tokenNames[this.type];
    return `<'${this.text}',${tokenName}>`;
  }
}
