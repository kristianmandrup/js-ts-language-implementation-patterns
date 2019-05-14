/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
import { Wiki, Token } from "./Wiki";
import { readFile } from "../_base/util";

export class WikiToHTML {
  public static main(...args: string[]): void {
    const wikiFilename = args[0];
    const fr = readFile(wikiFilename);
    const out = console.log;
    this.header(out);
    const lex = new Wiki(fr, { out });
    try {
      let t = lex.nextToken();
      while (t.getType() != Token.EOF) t = lex.nextToken();
    } catch (e) {
      throw e;
    }
    WikiToHTML.trailer(out);
  }

  static header(out: any): void {
    out.println(
      "<HTML>\n" +
        "<HEAD>\n" +
        '<meta http-equiv=content-type content="text/html; charset=utf-8"/>\n' +
        "<link rel=stylesheet href=http://www.cs.usfca.edu/~parrt/lecture-wiki.css " +
        'type="text/css"/>\n' +
        "</HEAD>\n" +
        "<BODY>\n"
    );
  }

  static trailer(out: any): void {
    out.log("</BODY>");
    out.log("</HTML>");
  }
}
