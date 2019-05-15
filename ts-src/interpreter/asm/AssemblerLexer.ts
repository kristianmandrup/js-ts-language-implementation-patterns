type BaseRecognizer = any;

class DFA {
  static unpackEncodedString(x: any) {
    return "";
  }
  static unpackEncodedStringToUnsignedChars(x: any) {
    return "";
  }

  predict(input: any): number {
    return 1;
  }
}

const DFA12_eotS =
  "\3\uffff\1\23\2\uffff\3\23\1\uffff\1\31\7\uffff\1\23\1\uffff\1\23" +
  "\1\uffff\1\23\1\uffff\1\27\1\uffff\2\23\1\36\1\23\1\uffff\1\23\1" +
  "\41\1\uffff";
const DFA12_eofS = "\42\uffff";
const DFA12_minS =
  "\1\11\1\55\1\uffff\1\50\2\uffff\3\50\1\60\1\56\7\uffff\1\50\1\uffff" +
  "\1\50\1\uffff\1\50\1\uffff\1\50\1\uffff\4\50\1\uffff\2\50\1\uffff";
const DFA12_maxS =
  "\1\172\1\147\1\uffff\1\172\2\uffff\3\172\2\71\7\uffff\1\172\1\uffff" +
  "\1\172\1\uffff\1\172\1\uffff\1\172\1\uffff\4\172\1\uffff\2\172\1" +
  "\uffff";
const DFA12_acceptS =
  "\2\uffff\1\3\1\uffff\1\5\1\6\5\uffff\1\14\1\15\1\17\1\20\1\1\1\2" +
  "\1\16\1\uffff\1\11\1\uffff\1\12\1\uffff\1\10\1\uffff\1\13\4\uffff" +
  "\1\4\2\uffff\1\7";
const DFA12_specialS = "\42\uffff}>";
const DFA12_transitionS = [
  "\1\15\1\16\2\uffff\1\16\22\uffff\1\15\1\uffff\1\14\4\uffff\1" +
    "\13\4\uffff\1\5\1\11\1\1\1\uffff\12\12\1\2\1\16\1\uffff\1\4" +
    "\3\uffff\32\10\6\uffff\1\3\12\10\1\6\5\10\1\7\10\10",
  "\1\21\2\uffff\12\21\52\uffff\1\20\2\uffff\1\17",
  "",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\21\24\1\22\10\24",
  "",
  "",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\16\24\1\26\13\24",
  "\1\25\4\uffff\1\27\2\uffff\12\30\7\uffff\32\24\6\uffff\32\24",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\32\24",
  "\12\12",
  "\1\21\1\uffff\12\12",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\6\24\1\32\23\24",
  "",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\32\24",
  "",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\2\24\1\33\27\24",
  "",
  "\1\25\7\uffff\12\30\7\uffff\32\24\6\uffff\32\24",
  "",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\22\24\1\34\7\24",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\1\35\31\24",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\32\24",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\13\24\1\37\16\24",
  "",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\22\24\1\40\7\24",
  "\1\25\7\uffff\12\24\7\uffff\32\24\6\uffff\32\24",
  ""
];

const DFA12_eot = DFA.unpackEncodedString(DFA12_eotS);
const DFA12_eof = DFA.unpackEncodedString(DFA12_eofS);
const DFA12_min = DFA.unpackEncodedStringToUnsignedChars(DFA12_minS);
const DFA12_max = DFA.unpackEncodedStringToUnsignedChars(DFA12_maxS);
const DFA12_accept = DFA.unpackEncodedString(DFA12_acceptS);
const DFA12_special = DFA.unpackEncodedString(DFA12_specialS);
let DFA12_transition: any[] = [];

const numStates = DFA12_transition.length;
DFA12_transition = [[]];
for (let i = 0; i < numStates; i++) {
  // DFA12_transition[i] = DFA.unpackEncodedString(DFA12_transitionS[i]);
}

class DFA12 extends DFA {
  recognizer: any;
  decisionNumber: number = 12;
  eot: string;
  eof: string;
  min: string;
  max: string;
  accept: string;
  special: string;
  transition: any;

  constructor(recognizer: BaseRecognizer) {
    super();
    this.recognizer = recognizer;
    this.decisionNumber = 12;
    this.eot = DFA12_eot;
    this.eof = DFA12_eof;
    this.min = DFA12_min;
    this.max = DFA12_max;
    this.accept = DFA12_accept;
    this.special = DFA12_special;
    this.transition = DFA12_transition;
  }
  public getDescription(): string {
    return "1:1: Tokens : ( T__15 | T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | REG | ID | FUNC | INT | CHAR | STRING | FLOAT | WS | NEWLINE );";
  }
}

class RecognizerSharedState {
  type: any;
  channel: any;
}

class Token {
  static INVALID_TOKEN_TYPE = 1;
  static DEFAULT_CHANNEL = 2;
}

class CommonToken {
  constructor(
    input: TokenStream,
    type: number,
    channel: number,
    x: number,
    charIndex: number
  ) {}

  getText() {
    return "";
  }
}

class NoViableAltException {
  constructor(msg: string = "", a?: number, b?: number, input?: any) {}
}

class MismatchedSetException {
  constructor(x: any, input: any) {}
}

class EarlyExitException {
  constructor(a: number, input: any) {}
}

class TokenStream {
  consume(): string {
    return "";
  }

  LA(lookahead: number): string {
    return "x";
  }
}

class Lexer {
  input: TokenStream;
  state: RecognizerSharedState;
  constructor(input: TokenStream, state: RecognizerSharedState) {
    this.input = input;
    this.state = state;
  }

  skip() {}

  // recover from exception
  recover(mse: any) {}

  getCharIndex(): number {
    return 0;
  }

  matchAny() {}
  // find next matching rule in input TokenStream
  match(token: any) {}
  matchRange(from: string, to: string): void {}
  setText(text: string | null) {}
}

const DEFAULT_TOKEN_CHANNEL = 0;

const LETTER = 12;
const T__20 = 20;
const WS = 14;
const CHAR = 9;
const STRING = 10;
const FLOAT = 11;
const T__21 = 21;
const T__19 = 19;
const NEWLINE = 4;
const T__17 = 17;
const INT = 5;
const EOF = -1;
const FUNC = 8;
const T__16 = 16;
const STR_CHARS = 13;
const REG = 7;
const T__18 = 18;
const T__15 = 15;
const ID = 6;

export class AssemblerLexer extends Lexer {
  // delegates
  // delegators

  dfa12: DFA12 = new DFA12(this);

  constructor(input: TokenStream, state: RecognizerSharedState) {
    super(input, state || new RecognizerSharedState());
  }

  public getGrammarFileName(): string {
    return "/Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g";
  }

  // $ANTLR start "T__15"
  public mT__15() {
    try {
      const _type = T__15;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:3:7: ( '.globals' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:3:9: '.globals'
      {
        this.match(".globals");
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "T__15"

  // $ANTLR start "T__16"
  public mT__16() {
    try {
      const _type = T__16;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:4:7: ( '.def' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:4:9: '.def'
      {
        this.match(".def");
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "T__16"

  // $ANTLR start "T__17"
  public mT__17() {
    try {
      const _type = T__17;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:5:7: ( ':' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:5:9: ':'
      {
        this.match(":");
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "T__17"

  // $ANTLR start "T__18"
  public mT__18() {
    try {
      const _type = T__18;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:6:7: ( 'args' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:6:9: 'args'
      {
        this.match("args");
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "T__18"

  // $ANTLR start "T__19"
  public mT__19() {
    try {
      const _type = T__19;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:7:7: ( '=' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:7:9: '='
      {
        this.match("=");
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "T__19"

  // $ANTLR start "T__20"
  public mT__20() {
    try {
      const _type = T__20;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:8:7: ( ',' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:8:9: ','
      {
        this.match(",");
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "T__20"

  // $ANTLR start "T__21"
  public mT__21() {
    try {
      const _type = T__21;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:9:7: ( 'locals' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:9:9: 'locals'
      {
        this.match("locals");
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "T__21"

  // $ANTLR start "REG"
  public mREG() {
    try {
      const _type = REG;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:71:5: ( 'r' INT )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:71:9: 'r' INT
      {
        this.match("r");
        this.mINT();
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "REG"

  // $ANTLR start "ID"
  public mID() {
    const { input } = this;
    try {
      const _type = ID;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:73:5: ( LETTER ( LETTER | '0' .. '9' )* )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:73:9: LETTER ( LETTER | '0' .. '9' )*
      {
        this.mLETTER();
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:73:16: ( LETTER | '0' .. '9' )*
        loop1: do {
          let alt1 = 2;
          const LA1_0 = input.LA(1);

          if (
            (LA1_0 >= "0" && LA1_0 <= "9") ||
            (LA1_0 >= "A" && LA1_0 <= "Z") ||
            (LA1_0 >= "a" && LA1_0 <= "z")
          ) {
            alt1 = 1;
          }

          switch (alt1) {
            case 1:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:
              {
                if (
                  (input.LA(1) >= "0" && input.LA(1) <= "9") ||
                  (input.LA(1) >= "A" && input.LA(1) <= "Z") ||
                  (input.LA(1) >= "a" && input.LA(1) <= "z")
                ) {
                  input.consume();
                } else {
                  const mse = new MismatchedSetException(null, input);
                  this.recover(mse);
                  throw mse;
                }
              }
              break;

            default:
              break loop1;
          }
        } while (true);
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "ID"

  // $ANTLR start "FUNC"
  public mFUNC() {
    const { input } = this;
    try {
      const _type = FUNC;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      let ID1 = null;

      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:75:5: ( ID '()' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:75:9: ID '()'
      {
        const ID1Start109 = this.getCharIndex();
        this.mID();
        ID1 = new CommonToken(
          input,
          Token.INVALID_TOKEN_TYPE,
          Token.DEFAULT_CHANNEL,
          ID1Start109,
          this.getCharIndex() - 1
        );
        this.match("()");

        this.setText(ID1 != null ? ID1.getText() : null);
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "FUNC"

  // $ANTLR start "LETTER"
  public mLETTER() {
    const { input } = this;
    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:79:5: ( ( 'a' .. 'z' | 'A' .. 'Z' ) )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:79:9: ( 'a' .. 'z' | 'A' .. 'Z' )
      {
        if (
          (input.LA(1) >= "A" && input.LA(1) <= "Z") ||
          (input.LA(1) >= "a" && input.LA(1) <= "z")
        ) {
          input.consume();
        } else {
          const mse = new MismatchedSetException(null, input);
          this.recover(mse);
          throw mse;
        }
      }
    } finally {
    }
  }
  // $ANTLR end "LETTER"

  // $ANTLR start "INT"
  public mINT() {
    const { input } = this;
    try {
      const _type = INT;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:82:5: ( ( '-' )? ( '0' .. '9' )+ )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:82:9: ( '-' )? ( '0' .. '9' )+
      {
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:82:9: ( '-' )?
        let alt2 = 2;
        const LA2_0 = input.LA(1);

        if (LA2_0 == "-") {
          alt2 = 1;
        }
        switch (alt2) {
          case 1:
            // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:82:9: '-'
            {
              this.match("-");
            }
            break;
        }

        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:82:14: ( '0' .. '9' )+
        let cnt3 = 0;
        loop3: do {
          let alt3 = 2;
          const LA3_0 = input.LA(1);

          if (LA3_0 >= "0" && LA3_0 <= "9") {
            alt3 = 1;
          }

          switch (alt3) {
            case 1:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:82:14: '0' .. '9'
              {
                this.matchRange("0", "9");
              }
              break;

            default:
              if (cnt3 >= 1) break loop3;
              const eee = new EarlyExitException(3, input);
              throw eee;
          }
          cnt3++;
        } while (true);
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "INT"

  // $ANTLR start "CHAR"
  public mCHAR() {
    try {
      const _type = CHAR;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:84:5: ( '\\'' . '\\'' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:84:9: '\\'' . '\\''
      {
        this.match("'");
        this.matchAny();
        this.match("'");
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "CHAR"

  // $ANTLR start "STRING"
  public mSTRING() {
    const { input } = this;
    try {
      const _type = STRING;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      let STR_CHARS2: any = null;

      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:86:7: ( '\\\"' STR_CHARS '\\\"' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:86:9: '\\\"' STR_CHARS '\\\"'
      {
        this.match('"');
        const STR_CHARS2Start193 = this.getCharIndex();
        this.mSTR_CHARS();
        STR_CHARS2 = new CommonToken(
          input,
          Token.INVALID_TOKEN_TYPE,
          Token.DEFAULT_CHANNEL,
          STR_CHARS2Start193,
          this.getCharIndex() - 1
        );
        this.match('"');
        this.setText(STR_CHARS2 != null ? STR_CHARS2.getText() : null);
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "STRING"

  // $ANTLR start "STR_CHARS"
  public mSTR_CHARS() {
    const { input } = this;
    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:88:20: ( (~ '\"' )* )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:88:22: (~ '\"' )*
      {
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:88:22: (~ '\"' )*
        loop4: do {
          let alt4 = 2;
          const LA4_0 = input.LA(1);

          if (
            (LA4_0 >= "\u0000" && LA4_0 <= "!") ||
            (LA4_0 >= "#" && LA4_0 <= "\uFFFF")
          ) {
            alt4 = 1;
          }

          switch (alt4) {
            case 1:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:88:22: ~ '\"'
              {
                if (
                  (input.LA(1) >= "\u0000" && input.LA(1) <= "!") ||
                  (input.LA(1) >= "#" && input.LA(1) <= "\uFFFF")
                ) {
                  input.consume();
                } else {
                  const mse = new MismatchedSetException(null, input);
                  this.recover(mse);
                  throw mse;
                }
              }
              break;

            default:
              break loop4;
          }
        } while (true);
      }
    } finally {
    }
  }
  // $ANTLR end "STR_CHARS"

  // $ANTLR start "FLOAT"
  public mFLOAT() {
    const { input } = this;
    try {
      const _type = FLOAT;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:91:5: ( INT '.' ( INT )* | '.' ( INT )+ )
      let alt7 = 2;
      const LA7_0 = input.LA(1);

      if (LA7_0 == "-" || (LA7_0 >= "0" && LA7_0 <= "9")) {
        alt7 = 1;
      } else if (LA7_0 == ".") {
        alt7 = 2;
      } else {
        const nvae = new NoViableAltException("", 7, 0, input);

        throw nvae;
      }
      switch (alt7) {
        case 1:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:91:9: INT '.' ( INT )*
          {
            this.mINT();
            this.match(".");
            // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:91:17: ( INT )*
            loop5: do {
              let alt5 = 2;
              const LA5_0 = input.LA(1);

              if (LA5_0 == "-" || (LA5_0 >= "0" && LA5_0 <= "9")) {
                alt5 = 1;
              }

              switch (alt5) {
                case 1:
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:91:17: INT
                  {
                    this.mINT();
                  }
                  break;

                default:
                  break loop5;
              }
            } while (true);
          }
          break;
        case 2:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:92:9: '.' ( INT )+
          {
            this.match(".");
            // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:92:13: ( INT )+
            let cnt6 = 0;
            loop6: do {
              let alt6 = 2;
              const LA6_0 = input.LA(1);

              if (LA6_0 == "-" || (LA6_0 >= "0" && LA6_0 <= "9")) {
                alt6 = 1;
              }

              switch (alt6) {
                case 1:
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:92:13: INT
                  {
                    this.mINT();
                  }
                  break;

                default:
                  if (cnt6 >= 1) break loop6;
                  const eee = new EarlyExitException(6, input);
                  throw eee;
              }
              cnt6++;
            } while (true);
          }
          break;
      }
      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "FLOAT"

  // $ANTLR start "WS"
  public mWS() {
    const { input } = this;
    try {
      const _type = WS;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:95:5: ( ( ' ' | '\\t' )+ )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:95:9: ( ' ' | '\\t' )+
      {
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:95:9: ( ' ' | '\\t' )+
        let cnt8 = 0;
        loop8: do {
          let alt8 = 2;
          const LA8_0 = input.LA(1);

          if (LA8_0 == "\t" || LA8_0 == " ") {
            alt8 = 1;
          }

          switch (alt8) {
            case 1:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:
              {
                if (input.LA(1) == "\t" || input.LA(1) == " ") {
                  input.consume();
                } else {
                  const mse = new MismatchedSetException(null, input);
                  this.recover(mse);
                  throw mse;
                }
              }
              break;

            default:
              if (cnt8 >= 1) break loop8;
              const eee = new EarlyExitException(8, input);
              throw eee;
          }
          cnt8++;
        } while (true);

        this.skip();
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "WS"

  // $ANTLR start "NEWLINE"
  public mNEWLINE() {
    const { input } = this;
    try {
      const _type = NEWLINE;
      const _channel = DEFAULT_TOKEN_CHANNEL;
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:98:5: ( ( ';' ( . )* )? ( '\\r' )? '\\n' )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:98:9: ( ';' ( . )* )? ( '\\r' )? '\\n'
      {
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:98:9: ( ';' ( . )* )?
        let alt10 = 2;
        const LA10_0 = input.LA(1);

        if (LA10_0 == ";") {
          alt10 = 1;
        }
        switch (alt10) {
          case 1:
            // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:98:10: ';' ( . )*
            {
              this.match(";");
              // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:98:14: ( . )*
              loop9: do {
                let alt9 = 2;
                const LA9_0 = input.LA(1);

                if (LA9_0 == "\r") {
                  alt9 = 2;
                } else if (LA9_0 == "\n") {
                  alt9 = 2;
                } else if (
                  (LA9_0 >= "\u0000" && LA9_0 <= "\t") ||
                  (LA9_0 >= "\u000B" && LA9_0 <= "\f") ||
                  (LA9_0 >= "\u000E" && LA9_0 <= "\uFFFF")
                ) {
                  alt9 = 1;
                }

                switch (alt9) {
                  case 1:
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:98:14: .
                    {
                      this.matchAny();
                    }
                    break;

                  default:
                    break loop9;
                }
              } while (true);
            }
            break;
        }

        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:98:19: ( '\\r' )?
        let alt11 = 2;
        const LA11_0 = input.LA(1);

        if (LA11_0 == "\r") {
          alt11 = 1;
        }
        switch (alt11) {
          case 1:
            // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:98:19: '\\r'
            {
              this.match("\r");
            }
            break;
        }

        this.match("\n");
      }

      this.state.type = _type;
      this.state.channel = _channel;
    } finally {
    }
  }
  // $ANTLR end "NEWLINE"

  public mTokens() {
    const { input } = this;
    // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:8: ( T__15 | T__16 | T__17 | T__18 | T__19 | T__20 | T__21 | REG | ID | FUNC | INT | CHAR | STRING | FLOAT | WS | NEWLINE )
    let alt12 = 16;
    alt12 = this.dfa12.predict(input);
    switch (alt12) {
      case 1:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:10: T__15
        {
          this.mT__15();
        }
        break;
      case 2:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:16: T__16
        {
          this.mT__16();
        }
        break;
      case 3:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:22: T__17
        {
          this.mT__17();
        }
        break;
      case 4:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:28: T__18
        {
          this.mT__18();
        }
        break;
      case 5:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:34: T__19
        {
          this.mT__19();
        }
        break;
      case 6:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:40: T__20
        {
          this.mT__20();
        }
        break;
      case 7:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:46: T__21
        {
          this.mT__21();
        }
        break;
      case 8:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:52: REG
        {
          this.mREG();
        }
        break;
      case 9:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:56: ID
        {
          this.mID();
        }
        break;
      case 10:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:59: FUNC
        {
          this.mFUNC();
        }
        break;
      case 11:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:64: INT
        {
          this.mINT();
        }
        break;
      case 12:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:68: CHAR
        {
          this.mCHAR();
        }
        break;
      case 13:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:73: STRING
        {
          this.mSTRING();
        }
        break;
      case 14:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:80: FLOAT
        {
          this.mFLOAT();
        }
        break;
      case 15:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:86: WS
        {
          this.mWS();
        }
        break;
      case 16:
        // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:1:89: NEWLINE
        {
          this.mNEWLINE();
        }
        break;
    }
  }
}
