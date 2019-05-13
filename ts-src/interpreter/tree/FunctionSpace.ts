import { MemorySpace } from "./MemorySpace";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
/** A function invocation scope; stores arguments and locals */
export class FunctionSpace extends MemorySpace {
  def: FunctionSymbol; // what function are we executing?
  constructor(func: FunctionSymbol) {
    super(func.name + " invocation");
    this.def = func;
  }
}
