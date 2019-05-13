/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

import { Token } from "./Token";

export interface IOpts {
  e: Error;
  t: Token;
}

/** How to response to messages and errors from interpreter */
export interface InterpreterListener {
  info: (msg: string) => void;
  error: (msg: string, opts: IOpts) => void;
}
