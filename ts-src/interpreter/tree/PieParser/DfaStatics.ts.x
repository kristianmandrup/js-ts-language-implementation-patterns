class DfaStatics {
  protected DFA8 dfa8 = new DFA8(this);
  protected DFA14 dfa14 = new DFA14(this);
  static string DFA8_eotS =
      "\12\uffff";
  static string DFA8_eofS =
      "\12\uffff";
  static string DFA8_minS =
      "\1\10\1\uffff\1\11\7\uffff";
  static string DFA8_maxS =
      "\1\27\1\uffff\1\42\7\uffff";
  static string DFA8_acceptS =
      "\1\uffff\1\1\1\uffff\1\3\1\4\1\5\1\6\1\10\1\7\1\2";
  static string DFA8_specialS =
      "\12\uffff}>";
  static string[] DFA8_transitionS = {
          "\1\5\1\uffff\1\4\1\6\1\3\6\uffff\1\1\2\uffff\1\2\1\7",
          "",
          "\1\11\12\uffff\1\11\15\uffff\1\10",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
  };

  static DFA8_eot = DFA.unpackEncodedstring(DFA8_eotS);
  static DFA8_eof = DFA.unpackEncodedstring(DFA8_eofS);
  static DFA8_min = DFA.unpackEncodedstringToUnsignedChars(DFA8_minS);
  static DFA8_max = DFA.unpackEncodedstringToUnsignedChars(DFA8_maxS);
  static DFA8_accept = DFA.unpackEncodedstring(DFA8_acceptS);
  static DFA8_special = DFA.unpackEncodedstring(DFA8_specialS);
  static DFA8_transition = [][];

  static {
      let numStates = DFA8_transitionS.length;
      DFA8_transition = new short[numStates][];
      for (let i=0; i<numStates; i++) {
          DFA8_transition[i] = DFA.unpackEncodedstring(DFA8_transitionS[i]);
      }
  }


  static string DFA14_eotS =
      "\12\uffff";
  static string DFA14_eofS =
      "\12\uffff";
  static string DFA14_minS =
      "\1\25\4\uffff\1\10\4\uffff";
  static string DFA14_maxS =
      "\1\42\4\uffff\1\44\4\uffff";
  static string DFA14_acceptS =
      "\1\uffff\1\1\1\2\1\3\1\4\1\uffff\1\7\1\10\1\6\1\5";
  static string DFA14_specialS =
      "\12\uffff}>";
  static string[] DFA14_transitionS = {
          "\1\6\1\5\1\uffff\1\1\1\2\1\3\1\4\6\uffff\1\7",
          "",
          "",
          "",
          "",
          "\1\11\1\uffff\3\11\1\uffff\7\11\1\uffff\2\11\10\uffff\1\11"+
          "\1\uffff\1\10\2\11",
          "",
          "",
          "",
          ""
  };

  static DFA14_eot = DFA.unpackEncodedstring(DFA14_eotS);
  static DFA14_eof = DFA.unpackEncodedstring(DFA14_eofS);
  static DFA14_min = DFA.unpackEncodedstringToUnsignedChars(DFA14_minS);
  static DFA14_max = DFA.unpackEncodedstringToUnsignedChars(DFA14_maxS);
  static DFA14_accept = DFA.unpackEncodedstring(DFA14_acceptS);
  static DFA14_special = DFA.unpackEncodedstring(DFA14_specialS);
  static DFA14_transition: number[][];

  static {
      let numStates = DFA14_transitionS.length;
      DFA14_transition = new short[numStates][];
      for (let i=0; i<numStates; i++) {
          DFA14_transition[i] = DFA.unpackEncodedstring(DFA14_transitionS[i]);
      }
  }
}