/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

export class Tree {
  payload: string = ""; // what each node holds
  children: Tree[] = []; // any children
  constructor(payload: string) {
    this.payload = payload;
  }
  public addChild(t: Tree): void {
    this.children.push(t);
  }
  public getChildCount(): number {
    return this.children.length;
  }
}
