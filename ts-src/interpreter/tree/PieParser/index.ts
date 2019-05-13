/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
// $ANTLR 3.2 Sep 23, 2009 12:02:23 /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g 2009-09-23 17:37:44

/** A simple dynamically-typed language that smacks of Python.
 *  This builds a tree, then we'll interpret it with a tree grammar
 *  Build a convential symbol table while parsing.  Save
 *  symbol ptrs in AST nodes.
 */

import { TokenStream } from "../TokenStream";
import { PieAST } from "../PieAST";

class NoViableAltException {
  constructor(msg: string = "", a: number, b: number, input: string = "") {}
}

class EarlyExitException {
  constructor(a: number, input: string = "") {}
}

class RewriteEarlyExitException {}

import { Interpreter } from "../Interpreter";
import { RecognizerSharedState } from "../../asm/RecognizerSharedState";
import { Scope } from "../Scope";
import { StructSymbol } from "../StructSymbol";

class Parser {
  input: TokenStream;
  state: RecognizerSharedState;

  constructor(input: TokenStream, state: RecognizerSharedState) {
    this.input = input;
    this.state = state;
  }
}

class RewriteRuleTokenStream {
  constructor(adaptor: any, input: any) {}
}

class RewriteRuleSubtreeStream {
  constructor(adaptor: any, input: any, ast?: PieAST | null) {}
}

class TreeAdaptor {}

class CommonTreeAdaptor {}

export class PieParser extends Parser {
  public static tokenNames = [
    "<invalid>",
    "<EOR>",
    "<DOWN>",
    "<UP>",
    "ARGS",
    "FIELDS",
    "BLOCK",
    "CALL",
    "IF",
    "ASSIGN",
    "PRINT",
    "WHILE",
    "RETURN",
    "DEF",
    "ADD",
    "SUB",
    "MUL",
    "EQ",
    "LT",
    "STRUCT",
    "DOT",
    "NEW",
    "ID",
    "NL",
    "INT",
    "CHAR",
    "FLOAT",
    "STRING",
    "LETTER",
    "WS",
    "SL_COMMENT",
    "'{'",
    "','",
    "'}'",
    "'('",
    "')'",
    "':'",
    "'else'"
  ];

  public static LETTER = 28;
  public static T__35 = 35;
  public static ARGS = 4;
  public static DEF = 13;
  public static T__36 = 36;
  public static WHILE = 11;
  public static WS = 29;
  public static CHAR = 25;
  public static STRING = 27;
  public static NEW = 21;
  public static EQ = 17;
  public static FLOAT = 26;
  public static LT = 18;
  public static T__33 = 33;
  public static DOT = 20;
  public static BLOCK = 6;
  public static MUL = 16;
  public static NL = 23;
  public static PRINT = 10;
  public static RETURN = 12;
  public static INT = 24;
  public static T__31 = 31;
  public static IF = 8;
  public static EOF = -1;
  public static STRUCT = 19;
  public static T__32 = 32;
  public static ASSIGN = 9;
  public static CALL = 7;
  public static T__37 = 37;
  public static SUB = 15;
  public static T__34 = 34;
  public static SL_COMMENT = 30;
  public static ADD = 14;
  public static ID = 22;
  public static FIELDS = 5;

  // delegates
  // delegators

  constructor(input: TokenStream, opts: any = {}) {
    super(input, opts.state || new RecognizerSharedState());
    this.interp = opts.interp;
    this.currentScope = this.interp.globalScope;
  }

  protected adaptor: TreeAdaptor = new CommonTreeAdaptor();

  public setTreeAdaptor(adaptor: TreeAdaptor) {
    this.adaptor = adaptor;
  }
  public getTreeAdaptor(): TreeAdaptor {
    return this.adaptor;
  }

  public getTokenNames(): string[] {
    return PieParser.tokenNames;
  }
  public getGrammarFileName(): string {
    return "/Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g";
  }

  interp: Interpreter;
  currentScope?: Scope;

  // Delegated rules
}
