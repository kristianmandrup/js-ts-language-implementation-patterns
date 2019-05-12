export class GroupingStatement {
  type: string;
  body: any[];

  constructor() {
    this.type = "GroupingStatement";
    this.body = [];
  }
  addNode(node: any) {
    this.body.push(node);
  }
}
