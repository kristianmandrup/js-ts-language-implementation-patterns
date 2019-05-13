/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
import { RecognitionException } from "./RecognitionException";
import { Token } from "./Token";
import { TokenStream } from "./TokenStream";
import { PieAST } from "./PieAST";

export class PieErrorNode extends PieAST {
  constructor(
    input: TokenStream,
    start: Token,
    stop: Token,
    e: RecognitionException
  ) {
    super(start); // no need to record anything for this example
  }
}
