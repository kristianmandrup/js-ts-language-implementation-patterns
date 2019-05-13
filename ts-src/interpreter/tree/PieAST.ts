/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

import { CommonTree } from "./CommonTree";
import { Token } from "./Token";
import { Scope } from "./Scope";

export class PieAST extends CommonTree {
  scope?: Scope; // recorded in parser, used in visitor

  constructor(t: Token) {
    super(t);
  }
}
