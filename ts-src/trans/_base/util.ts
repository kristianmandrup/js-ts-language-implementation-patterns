import * as fs from "fs";

export class ANTLRReaderStream {
  constructor(fr: any) {}
}

export const readFile = (fileName: string) => fs.readFileSync(fileName, "utf8");

export { StringTemplateGroup, StringTemplate } from "stringtemplate-js";

export class File {
  constructor(fileName: string) {}

  exists() {
    return true;
  }

  lastModified() {
    return new Date();
  }
}

export class Field {}

type Lexer = any;

export class TokenRewriteStream {
  constructor(lexer: Lexer) {}
}

export class CommonTokenStream {
  constructor(lexer: Lexer) {}
}

export class OutputWriter {
  constructor(file: string) {}
}

export class CommonTreeNodeStream {
  constructor(tree: any) {}

  setTokenStream(tokens: any) {}
}

export class ANTLRFileStream {
  constructor(input: string) {}
}

export class ANTLRInputStream {
  constructor(input: string) {}
}
