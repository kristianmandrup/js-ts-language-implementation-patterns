/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

import { readFile, StringTemplateGroup } from "../_base/util";

class Link {
  from: string;
  to: string;
  constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }
}

export class LinkViz {
  templates: StringTemplateGroup;
  links: Link[] = [];

  constructor() {
    const template = readFile("DOT.stg");
    this.templates = new StringTemplateGroup({ template });
  }

  public addLink(from: string, to: string): void {
    const { links } = this;
    links.push(new Link(from, to));
  }

  public toString(): string {
    const { templates, links } = this;
    const fileST = templates.getInstanceOf("file");
    fileST.setAttribute("gname", "testgraph");
    for (let x of links) {
      const edgeST = templates.getInstanceOf("edge");
      edgeST.setAttribute("from", x.from);
      edgeST.setAttribute("to", x.to);
      fileST.setAttribute("edges", edgeST);
    }
    return fileST.toString(); // render (eval) template to text
  }
}
