export class NumberLiteral {
  type: string;
  value: any;

  constructor(value: any) {
    this.type = "NumberLiteral";
    this.value = value;
  }
}
