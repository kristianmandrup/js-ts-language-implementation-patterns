import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class qid_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}

export class Quid {
  // $ANTLR start "qid"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:1: qid : ID ( '.' ID )* ;
  qid(): qid_return {
    let retval = new qid_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let ID70 = null;
    let char_literal71 = null;
    let ID72 = null;

    let ID70_tree = null;
    let char_literal71_tree = null;
    let ID72_tree = null;

    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:5: ( ID ( '.' ID )* )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:7: ID ( '.' ID )*
      {
        root_0 = adaptor.nil();

        ID70 = match(input, ID, FOLLOW_ID_in_qid701);
        ID70_tree = adaptor.create(ID70);
        adaptor.addChild(root_0, ID70_tree);

        // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:10: ( '.' ID )*
        loop15: do {
          let alt15 = 2;
          let LA15_0 = input.LA(1);

          if (LA15_0 == DOT) {
            alt15 = 1;
          }

          switch (alt15) {
            case 1:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:11: '.' ID
              {
                char_literal71 = match(input, DOT, FOLLOW_DOT_in_qid704);
                char_literal71_tree = adaptor.create(char_literal71);
                root_0 = adaptor.becomeRoot(char_literal71_tree, root_0);

                ID72 = match(input, ID, FOLLOW_ID_in_qid707);
                ID72_tree = adaptor.create(ID72);
                adaptor.addChild(root_0, ID72_tree);
              }
              break;

            default:
              break loop15;
          }
        } while (true);
      }

      retval.stop = input.LT(-1);

      retval.tree = adaptor.rulePostProcessing(root_0);
      adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);
    } catch (re) {
      reportError(re);
      recover(input, re);
      retval.tree = adaptor.errorNode(input, retval.start, input.LT(-1), re);
    } finally {
    }
    return retval;
  }
  // $ANTLR end "qid"
}
