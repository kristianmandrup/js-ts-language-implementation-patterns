/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
export class Token {
  public static INVALID_TOKEN_TYPE = 0;
  public static PLUS = 1; // token types
  public static MULT = 2;
  public static DOT = 3;
  public static INT = 4;
  public static VEC = 5;
  public static ID = 6;
  public static ASSIGN = 7;
  public static PRINT = 8;
  public static STAT_LIST = 9;

  public type: number = 0;
  public text: string | undefined = "";

  constructor(type: number, text?: string) {
    this.type = type;
    this.text = text;
  }
  public toString(): string | undefined {
    return this.text;
  }
}
