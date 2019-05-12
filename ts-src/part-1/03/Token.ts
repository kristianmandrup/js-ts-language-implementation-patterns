export class Token {
  public type: string;
  public text: string;

  constructor(type: string, text: string) {
    this.type = type;
    this.text = text;
  }
  toString() {
    return `${this.type}: ${this.text}`;
  }
  length() {
    return this.text.length;
  }
}
