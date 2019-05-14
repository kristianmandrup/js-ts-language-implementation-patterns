import { Tree } from "./Tree";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

class StringTemplateGroup {
  constructor(input: string) {}

  getInstanceOf(id: string): any {
    return this;
  }
}

class StringTemplate {
  getAttribute(id: string): any {}
  setAttribute(id: string, value: any): void {}
}

class Field {}

import * as fs from "fs";
const readFile = (fileName: string) => fs.readFileSync(fileName, "utf8");

export class ASTViz {
  templates: StringTemplateGroup = new StringTemplateGroup("");
  counter: number = 1; // used to make unique names
  root: Tree;

  constructor(root: Tree) {
    this.root = root;
    const fr = readFile("DOT.stg");
    this.templates = new StringTemplateGroup(fr);
  }

  public toString(): string {
    const fileST = this.templates.getInstanceOf("file");
    fileST.setAttribute("gname", "testgraph");
    this.counter = 1;
    this.walk(this.root, fileST);
    return fileST.toString();
  }

  /** Fill fileST with nodes and edges; return subtree root's ST */
  protected walk(tree: Tree, fileST: StringTemplate): StringTemplate {
    const parentST = this.getNodeST(tree);
    fileST.setAttribute("nodes", parentST); // define subtree root
    if (tree.getChildCount() == 0) return parentST;
    // for each child, create nodes/edges and inject into fileST
    for (let child of tree.children) {
      const childST = this.walk(child, fileST);
      const from = parentST.getAttribute("name");
      const to = childST.getAttribute("name");
      const edgeST = this.getEdgeST(from, to);
      fileST.setAttribute("edges", edgeST);
    }
    return parentST;
  }

  protected getEdgeST(from: any, to: any): StringTemplate {
    const edgeST = this.templates.getInstanceOf("edge");
    edgeST.setAttribute("from", from);
    edgeST.setAttribute("to", to);
    return edgeST;
  }

  protected getNodeST(t: Tree): StringTemplate {
    const nodeST = this.templates.getInstanceOf("node");
    const uniqueName = "node" + this.counter++; // use counter for unique name
    nodeST.setAttribute("name", uniqueName);
    nodeST.setAttribute("text", t.payload);
    return nodeST;
  }
}
