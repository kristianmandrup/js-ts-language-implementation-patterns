export class Ast {
  type: string;
  body: any[];

  constructor() {
    this.type = "Program";
    this.body = [];
  }
  addNode(node: any) {
    this.body.push(node);
  }
}
