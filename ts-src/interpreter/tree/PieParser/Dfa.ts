export class DFA8 extends DFA {

  public DFA8(BaseRecognizer recognizer) {
      this.recognizer = recognizer;
      this.decisionNumber = 8;
      this.eot = DFA8_eot;
      this.eof = DFA8_eof;
      this.min = DFA8_min;
      this.max = DFA8_max;
      this.accept = DFA8_accept;
      this.special = DFA8_special;
      this.transition = DFA8_transition;
  }
  public string getDescription() {
      return "65:1: statement : ( structDefinition | qid '=' expr NL -> ^( '=' qid expr ) | 'return' expr NL -> ^( 'return' expr ) | 'print' expr NL -> ^( 'print' expr ) | 'if' expr c= slist ( 'else' el= slist )? -> ^( 'if' expr $c ( $el)? ) | 'while' expr slist -> ^( 'while' expr slist ) | call NL -> call | NL ->);";
  }
}

export class DFA14 extends DFA {

  public DFA14(BaseRecognizer recognizer) {
      this.recognizer = recognizer;
      this.decisionNumber = 14;
      this.eot = DFA14_eot;
      this.eof = DFA14_eof;
      this.min = DFA14_min;
      this.max = DFA14_max;
      this.accept = DFA14_accept;
      this.special = DFA14_special;
      this.transition = DFA14_transition;
  }
  public string getDescription() {
      return "93:1: atom : ( INT | CHAR | FLOAT | STRING | qid | call | instance | '(' expr ')' -> expr );";
  }
}