import { Token } from "../../semantics/safety/Token";
import { RecognizerSharedState} from './RecognizerSharedState'
import { Parser } from './Parser'
import { TokenStream } from './TokenStream'
import { ParserRuleReturnScope} from './ParserRuleReturnScope'

class NoViableAltException {
    constructor(msg: string = "", a: number, b: number, input: string = "") {}
}

class EarlyExitException {
    constructor(a: number, input: string = "") {}
}

class operand_return extends ParserRuleReturnScope {
};

class DFA {}

class DFA1 extends DFA {

    constructor(recognizer: BaseRecognizer) {
        super()
        this.recognizer = recognizer;
        this.decisionNumber = 1;
        this.eot = DFA1_eot;
        this.eof = DFA1_eof;
        this.min = DFA1_min;
        this.max = DFA1_max;
        this.accept = DFA1_accept;
        this.special = DFA1_special;
        this.transition = DFA1_transition;
    }
    public string getDescription() {
        return "26:9: ( globals )?";
    }
}

export class AssemblerParser extends Parser {
  public static tokenNames: string[] = [
      "<invalid>", "<EOR>", "<DOWN>", "<UP>", "NEWLINE", "INT", "ID", "REG", "FUNC", "CHAR", "STRING", "FLOAT", "LETTER", "STR_CHARS", "WS", "'.globals'", "'.def'", "':'", "'args'", "'='", "','", "'locals'"
  ];
  public static LETTER =12;
  public static T__20 =20;
  public static WS =14;
  public static CHAR =9;
  public static STRING =10;
  public static FLOAT =11;
  public static T__21 =21;
  public static T__19 =19;
  public static NEWLINE =4;
  public static T__17 =17;
  public static INT =5;
  public static EOF =-1;
  public static FUNC =8;
  public static T__16 =16;
  public static STR_CHARS =13;
  public static REG =7;
  public static T__18 =18;
  public static T__15 =15;
  public static ID =6;

  protected dfa1 = new DFA1(this);
  static DFA1_eotS = "\4\uffff";
  static DFA1_eofS =
      "\1\uffff\1\3\2\uffff";
  static  DFA1_minS =
      "\2\4\2\uffff";
  static  DFA1_maxS =
      "\2\20\2\uffff";
  static  DFA1_acceptS =
      "\2\uffff\1\1\1\2";
  static  DFA1_specialS =
      "\4\uffff}>";
  static DFA1_transitionS = [
          "\1\1\1\uffff\1\3\10\uffff\1\2\1\3",
          "\1\1\1\uffff\1\3\10\uffff\1\2\1\3",
          "",
          ""
  ];

  static DFA1_eot = DFA.unpackEncodedstring(DFA1_eotS);
  static DFA1_eof = DFA.unpackEncodedstring(DFA1_eofS);
  static DFA1_min = DFA.unpackEncodedstringToUnsignedChars(DFA1_minS);
  static DFA1_max = DFA.unpackEncodedstringToUnsignedChars(DFA1_maxS);
  static DFA1_accept = DFA.unpackEncodedstring(DFA1_acceptS);
  static DFA1_special = DFA.unpackEncodedstring(DFA1_specialS);
  static DFA1_transition = [][];

  // delegates
  // delegators

    public AssemblerParser(input: TokenStream, state: RecognizerSharedState = new RecognizerSharedState()) {
        super(input, state);           
    }
      

    public getTokenNames(): string[] { return AssemblerParser.tokenNames; }
    public getGrammarFileName(): string { return "/Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g"; }


      // Define the functionality required by the parser for code generation
      protected gen1(instrToken: Token) {;}
      protected gen2(instrToken: Token , operandToken: Token) {;}
      protected gen3(instrToken: Token, oToken1: Token, oToken2: Token) {;}
      protected gen4(instrToken: Token, oToken1: Token, oToken2: Token, oToken3: Token) {;}
      protected checkForUnresolvedReferences() {;}
      protected defineFunction(idToken: Token, nargs: number, nlocals: number) {;}
      protected defineDataSize(n: number) {;}
      protected defineLabel(idToken: Token) {;}


  // $ANTLR start "program"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:25:1: program : ( globals )? ( functionDeclaration | instr | label | NEWLINE )+ ;
  public program() {
      try {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:26:5: ( ( globals )? ( functionDeclaration | instr | label | NEWLINE )+ )
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:26:9: ( globals )? ( functionDeclaration | instr | label | NEWLINE )+
          {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:26:9: ( globals )?
          let alt1 =2;
          alt1 = dfa1.predict(this.input);

          switch (alt1) {
              case 1 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:26:9: globals
                  {
                  pushFollow(FOLLOW_globals_in_program26);
                  globals();

                  state._fsp--;


                  }
                  break;

          }

          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:27:9: ( functionDeclaration | instr | label | NEWLINE )+
          let cnt2=0;

          loop2:
          do {
              let alt2=5;
              switch ( input.LA(1) ) {
              case 16:
                  {
                  alt2=1;
                  }
                  break;
              case ID:
                  {
                  int LA2_3 = input.LA(2);

                  if ( ((LA2_3>=NEWLINE && LA2_3<=FLOAT)) ) {
                      alt2=2;
                  }
                  else if ( (LA2_3==17) ) {
                      alt2=3;
                  }


                  }
                  break;
              case NEWLINE:
                  {
                  alt2=4;
                  }
                  break;

              }

              switch (alt2) {
            case 1 :
                // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:27:11: functionDeclaration
                {
                pushFollow(FOLLOW_functionDeclaration_in_program39);
                functionDeclaration();

                state._fsp--;


                }
                break;
            case 2 :
                // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:27:33: instr
                {
                pushFollow(FOLLOW_instr_in_program43);
                instr();

                state._fsp--;


                }
                break;
            case 3 :
                // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:27:41: label
                {
                pushFollow(FOLLOW_label_in_program47);
                label();

                state._fsp--;


                }
                break;
            case 4 :
                // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:27:49: NEWLINE
                {
                match(input,NEWLINE,FOLLOW_NEWLINE_in_program51); 

                }
                break;

            default :
                if ( cnt2 >= 1 ) break loop2;
                      let eee =
                          new EarlyExitException(2, input);
                      throw eee;
              }
              cnt2++;
          } while (true);

          this.checkForUnresolvedReferences();
          }

      }
      catch (re) {
          reportError(re);
          recover(input,re);
      }
      return ;
  }
  // $ANTLR end "program"


  // $ANTLR start "globals"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:33:1: globals : ( NEWLINE )* '.globals' INT NEWLINE ;
  public globals() {
    let INT1 =null;

      try {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:33:9: ( ( NEWLINE )* '.globals' INT NEWLINE )
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:33:11: ( NEWLINE )* '.globals' INT NEWLINE
          {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:33:11: ( NEWLINE )*
          loop3:
          do {
              let alt3=2;
              let LA3_0 = input.LA(1);

              if ( (LA3_0==NEWLINE) ) {
                  alt3=1;
              }


              switch (alt3) {
            case 1 :
                // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:33:11: NEWLINE
                {
                match(input,NEWLINE,FOLLOW_NEWLINE_in_globals82); 

                }
                break;

            default :
                break loop3;
              }
          } while (true);

          match(input,15,FOLLOW_15_in_globals85); 
          INT1=match(input,INT,FOLLOW_INT_in_globals87); 
          match(input,NEWLINE,FOLLOW_NEWLINE_in_globals89); 
          defineDataSize((INT1!=null?Integer.valueOf(INT1.getText()):0));

          }

      }
      catch (re) {
          reportError(re);
          recover(input,re);
      }
      return ;
  }
  // $ANTLR end "globals"


  // $ANTLR start "functionDeclaration"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:38:1: functionDeclaration : '.def' name= ID ':' 'args' '=' a= INT ',' 'locals' '=' n= INT NEWLINE ;
  public functionDeclaration() {
      let name=null;
      let a=null;
      let n=null;

      try {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:39:5: ( '.def' name= ID ':' 'args' '=' a= INT ',' 'locals' '=' n= INT NEWLINE )
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:39:7: '.def' name= ID ':' 'args' '=' a= INT ',' 'locals' '=' n= INT NEWLINE
          {
          match(input,16,FOLLOW_16_in_functionDeclaration107); 
          name= match(input,ID,FOLLOW_ID_in_functionDeclaration111); 
          match(input,17,FOLLOW_17_in_functionDeclaration113); 
          match(input,18,FOLLOW_18_in_functionDeclaration115); 
          match(input,19,FOLLOW_19_in_functionDeclaration117); 
          a= match(input,INT,FOLLOW_INT_in_functionDeclaration121); 
          match(input,20,FOLLOW_20_in_functionDeclaration123); 
          match(input,21,FOLLOW_21_in_functionDeclaration125); 
          match(input,19,FOLLOW_19_in_functionDeclaration127); 
          n= match(input,INT,FOLLOW_INT_in_functionDeclaration131); 
          match(input,NEWLINE,FOLLOW_NEWLINE_in_functionDeclaration133); 
          defineFunction(name, (a!=null?Integer.valueOf(a.getText()):0), (n!=null?Integer.valueOf(n.getText()):0));

          }

      }
      catch (re) {
          reportError(re);
          recover(input,re);
      }
      return ;
  }
  // $ANTLR end "functionDeclaration"


  // $ANTLR start "instr"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:45:1: instr : ( ID NEWLINE | ID operand NEWLINE | ID a= operand ',' b= operand NEWLINE | ID a= operand ',' b= operand ',' c= operand NEWLINE );
  public instr() {
      let ID2=null;
      let ID3=null;
      let ID5=null;
      let ID6=null;

      let a = null;
      let b = null;
      let c = null;
      let operand4 = null;


      try {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:46:5: ( ID NEWLINE | ID operand NEWLINE | ID a= operand ',' b= operand NEWLINE | ID a= operand ',' b= operand ',' c= operand NEWLINE )
          let alt4=4;
          let LA4_0 = input.LA(1);

          if ( (LA4_0==ID) ) {
            letLA4_1 = input.LA(2);

              if ( (LA4_1==NEWLINE) ) {
                  alt4=1;
              }
              else if ( ((LA4_1>=INT && LA4_1<=FLOAT)) ) {
                letLA4_3 = input.LA(3);

                  if ( (LA4_3==NEWLINE) ) {
                      alt4=2;
                  }
                  else if ( (LA4_3==20) ) {
                      int LA4_5 = input.LA(4);

                      if ( ((LA4_5>=INT && LA4_5<=FLOAT)) ) {
                          int LA4_6 = input.LA(5);

                          if ( (LA4_6==NEWLINE) ) {
                              alt4=3;
                          }
                          else if ( (LA4_6==20) ) {
                              alt4=4;
                          }
                          else {
                            let nvae =
                                  new NoViableAltException("", 4, 6, input);

                              throw nvae;
                          }
                      }
                      else {
                        let nvae =
                              new NoViableAltException("", 4, 5, input);

                          throw nvae;
                      }
                  }
                  else {
                    let nvae =
                          new NoViableAltException("", 4, 3, input);

                      throw nvae;
                  }
              }
              else {
                  let nvae =
                      new NoViableAltException("", 4, 1, input);

                  throw nvae;
              }
          }
          else {
            let nvae =
                  new NoViableAltException("", 4, 0, input);

              throw nvae;
          }
          switch (alt4) {
              case 1 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:46:9: ID NEWLINE
                  {
                  ID2= match(input,ID,FOLLOW_ID_in_instr162); 
                  match(input,NEWLINE,FOLLOW_NEWLINE_in_instr164); 
                  gen(ID2);

                  }
                  break;
              case 2 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:47:9: ID operand NEWLINE
                  {
                  ID3=match(input,ID,FOLLOW_ID_in_instr200); 
                  pushFollow(FOLLOW_operand_in_instr202);
                  operand4=operand();

                  state._fsp--;

                  match(input,NEWLINE,FOLLOW_NEWLINE_in_instr204); 
                  gen(ID3,(operand4!=null?(operand4.start):null));

                  }
                  break;
              case 3 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:48:9: ID a= operand ',' b= operand NEWLINE
                  {
                  ID5=match(input,ID,FOLLOW_ID_in_instr232); 
                  pushFollow(FOLLOW_operand_in_instr236);
                  a=operand();

                  state._fsp--;

                  match(input,20,FOLLOW_20_in_instr238); 
                  pushFollow(FOLLOW_operand_in_instr242);
                  b=operand();

                  state._fsp--;

                  match(input,NEWLINE,FOLLOW_NEWLINE_in_instr244); 
                  gen(ID5,(a!=null?(a.start):null),(b!=null?(b.start):null));

                  }
                  break;
              case 4 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:49:9: ID a= operand ',' b= operand ',' c= operand NEWLINE
                  {
                  ID6=match(input,ID,FOLLOW_ID_in_instr256); 
                  pushFollow(FOLLOW_operand_in_instr260);
                  a=operand();

                  state._fsp--;

                  match(input,20,FOLLOW_20_in_instr262); 
                  pushFollow(FOLLOW_operand_in_instr266);
                  b=operand();

                  state._fsp--;

                  match(input,20,FOLLOW_20_in_instr268); 
                  pushFollow(FOLLOW_operand_in_instr272);
                  c=operand();

                  state._fsp--;

                  match(input,NEWLINE,FOLLOW_NEWLINE_in_instr274); 
                  gen(ID6,(a!=null?(a.start):null),(b!=null?(b.start):null),(c!=null?(c.start):null));

                  }
                  break;

          }
      }
      catch (re) {
          reportError(re);
          recover(input,re);
      }
      return ;
  }
  // $ANTLR end "instr"

  // $ANTLR start "operand"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:55:1: operand : ( ID | REG | FUNC | INT | CHAR | STRING | FLOAT );
  operand() : AssemblerParser.operand_return  {
      let retval = new AssemblerParser.operand_return();
      retval.start = input.LT(1);

      try {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:56:5: ( ID | REG | FUNC | INT | CHAR | STRING | FLOAT )
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:
          {
          if ( (input.LA(1)>=INT && input.LA(1)<=FLOAT) ) {
              input.consume();
              state.errorRecovery=false;
          }
          else {
              let mse = new MismatchedSetException(null,input);
              throw mse;
          }


          }

          retval.stop = input.LT(-1);

      }
      catch (RecognitionException re) {
          reportError(re);
          recover(input,re);
      }
      finally {
      }
      return retval;
  }
  // $ANTLR end "operand"


  // $ANTLR start "label"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:67:1: label : ID ':' ;
  public label() {
      let ID7=null;

      try {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:68:5: ( ID ':' )
          // /Users/parrt/research/book/TPDSL/Book/code/interp/asm/Assembler.g:68:9: ID ':'
          {
          ID7=match(input,ID,FOLLOW_ID_in_label392); 
          match(input,17,FOLLOW_17_in_label394); 
          defineLabel(ID7);

          }

      }
      catch (RecognitionException re) {
          reportError(re);
          recover(input,re);
      }
      return ;
  }
  // $ANTLR end "label"

  // Delegated rules


  static numStates = AssemblerParser.DFA1_transitionS.length;
  
}

for (let i=0; i< AssemblerParser.numStates; i++) {
    AssemblerParser.DFA1_transitionS[i] = DFA.unpackEncodedstring(DFA1_transitionS[i]);
}
