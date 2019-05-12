import {
  Program,
  ExpressionStatement,
  GroupingStatement,
  NumberLiteral
} from "./util";

export function traverser(ast: any, visitor: any) {
  let handleArray = (array: any[], parent: any, layer: any) => {
    array.forEach(node => handleNode(node, parent, layer));
  };
  let handleNode = (node: any, parent: any, layer: any) => {
    let enter = `on${node.type}Enter`;
    let through = `on${node.type}Through`;
    let exit = `on${node.type}Exit`;

    if (visitor[enter]) {
      visitor[enter](node, parent, layer);
    }

    switch (node.type) {
      case Program:
        handleArray(node.body, node, layer + 1);
        break;
      case ExpressionStatement:
        handleNode(node.left, node, layer + 1);
        if (visitor[through]) {
          visitor[through](node, parent, layer);
        }
        handleNode(node.right, node, layer + 1);
        break;
      case GroupingStatement:
        handleArray(node.body, node, layer + 1);
        break;
      case NumberLiteral:
        break;
      default:
        throw new TypeError(node.type);
    }

    if (visitor[exit]) {
      visitor[exit](node, parent, layer);
    }
  };
  handleNode(ast, null, 0);
}
