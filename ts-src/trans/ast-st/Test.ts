/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
class TokenRewriteStream {
  constructor(lexer: CymbolLexer) {}
}

class CompilationUnit {
  getTree() {}
  getTemplate() {}
}

class CymbolParser {
  constructor(tokens: any) {}

  compilationUnit() {
    return new CompilationUnit();
  }
}

class CommonTreeNodeStream {
  constructor(tree: any) {}

  setTokenStream(tokens: any) {}
}

class ANTLRFileStream {
  constructor(input: string) {}
}
class ANTLRInputStream {
  constructor(input: string) {}
}

import * as fs from "fs";
const readFile = (fileName: string) => fs.readFileSync(fileName, "utf8");

class StringTemplateGroup {
  constructor(input: string) {}

  getInstanceOf(id: string): any {
    return this;
  }
}

class Gen extends CymbolParser {
  constructor(nodes: any) {
    super(nodes);
  }

  setTemplateLib(templates: any) {}
}

class CymbolLexer {
  constructor(input: string) {}
}

class StringTemplate {}
export class Test {
  public static main(input: string): void {
    const lex = new CymbolLexer(input);
    const tokens = new TokenRewriteStream(lex);
    const p = new CymbolParser(tokens);
    const r = p.compilationUnit(); // launch parser
    const tree = r.getTree(); // get tree result
    //System.out.println("tree: "+tree.toStringTree());

    // LOAD TEMPLATES (via classpath)
    const fr = readFile("Cymbol.stg");
    const templates = new StringTemplateGroup(fr);

    //  CREATE TREE NODE STREAM FOR TREE PARSERS
    const nodes = new CommonTreeNodeStream(tree);
    nodes.setTokenStream(tokens); // where to find tokens
    const gen = new Gen(nodes);
    gen.setTemplateLib(templates);
    const ret = gen.compilationUnit();
    console.log(ret.getTemplate());
  }
}
