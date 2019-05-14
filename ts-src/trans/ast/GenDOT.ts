import { Tree } from "./Tree";
import { ASTViz } from "./ASTViz";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
export class GenDOT {
  static main(args: String[]) {
    const t = new Tree("VAR");
    t.addChild(new Tree("int"));
    t.addChild(new Tree("x"));
    const m = new Tree("+");
    m.addChild(new Tree("3"));
    m.addChild(new Tree("4"));
    t.addChild(m);
    const viz = new ASTViz(t);
    console.log(viz.toString());
  }
}
