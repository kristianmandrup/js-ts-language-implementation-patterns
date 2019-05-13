import { Interpreter } from "./Interpreter";
import { FileInputStream } from "../stack/FileInputStream";
import { PieErrorNode } from "./PieErrorNode";
import { PieAST } from "./PieAST";
import { Token } from "./Token";
import { TokenStream } from "./TokenStream";
import { RecognitionException } from "./RecognitionException";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

class CommonTreeAdaptor {
  public create(token: Token): any {
    return new PieAST(token);
  }
  public dupNode(t: any): any {
    if (t == null) {
      return null;
    }
    return this.create(t.token);
  }
  public errorNode(
    input: TokenStream,
    start: Token,
    stop: Token,
    e: RecognitionException
  ): any {
    return new PieErrorNode(input, start, stop, e);
  }
}

class TreeAdaptor {}

export class InterPie {
  /** An adaptor that tells ANTLR to build PieAST nodes */
  static pieAdaptor: TreeAdaptor = new CommonTreeAdaptor();

  static main(args: string[]) {
    let input = null;
    if (args.length > 0) input = new FileInputStream(args[0]);
    else input = console.log;
    let interp = new Interpreter();
    interp.interp(input);
  }
}
