/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
***/

/** The makefile->makefile.java translator main program */
export class Maker {
    main(...args: string[]): void {
        const makefileName = args[0];
        const fr = new FileReader(makefileName);
        const lex = new MakeLexer(new ANTLRReaderStream(fr));
        const tokens = new CommonTokenStream(lex);
        const gen = new JavaGenerator(makefileName);
        const p = new MakeParser(tokens, gen);
        try { p.rules(); } // parse, triggering code generation actions
        catch (RecognitionException e) {
            e.printStackTrace();
        }
        finally {
            fr.close();
        }
    }
}
