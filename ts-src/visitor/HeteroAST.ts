/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
import { Token } from "./Token";

export class HeteroAST {
  // Heterogeneous AST node type

  token: Token; // This node created from which token?
  constructor(t: Token) {
    this.token = t;
  }

  public toString() {
    return this.token.toString();
  }
}
