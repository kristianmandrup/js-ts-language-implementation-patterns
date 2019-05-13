/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

/** A scope of variable:value pairs */
export class MemorySpace {
  name: string; // mainly for debugging purposes
  members: any = {};

  constructor(name: string) {
    this.name = name;
  }

  public get(id: string): any {
    return this.members[id];
  }

  public put(id: string, value: any) {
    this.members[id] = value;
  }

  public toString(): string {
    return this.name + ":" + this.members;
  }
}
