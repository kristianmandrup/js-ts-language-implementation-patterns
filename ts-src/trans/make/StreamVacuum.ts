/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

const readline = require("linebyline");

export class StreamVacuum {
  buffer: string = "";
  lineReader: any;

  constructor(filename: string) {
    const rl = readline(filename);
    this.lineReader = rl;
  }

  start(): void {}

  run(): void {
    const { buffer, lineReader } = this;
    lineReader.on("line", (line: string) => {
      buffer.concat(line + "=n");
    });
    lineReader.on("error", (e: any) => {
      throw e;
    });
  }

  toString(): string {
    return this.buffer;
  }
}
