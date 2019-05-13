import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class mulexpr_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}

export class MulExpr {
  // $ANTLR start "mulexpr"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:89:1: mulexpr : atom ( '*' atom )* ;
  mulexpr(): mulexpr_return {
    let retval = new mulexpr_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let char_literal57 = null;

    let atom56 = null;
    let atom58 = null;

    let char_literal57_tree = null;

    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:90:2: ( atom ( '*' atom )* )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:90:4: atom ( '*' atom )*
      {
        root_0 = adaptor.nil();

        pushFollow(FOLLOW_atom_in_mulexpr571);
        atom56 = atom();

        state._fsp--;

        adaptor.addChild(root_0, atom56.getTree());
        // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:90:9: ( '*' atom )*
        loop13: do {
          let alt13 = 2;
          let LA13_0 = input.LA(1);

          if (LA13_0 == MUL) {
            alt13 = 1;
          }

          switch (alt13) {
            case 1:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:90:10: '*' atom
              {
                char_literal57 = match(input, MUL, FOLLOW_MUL_in_mulexpr574);
                char_literal57_tree = adaptor.create(char_literal57);
                root_0 = adaptor.becomeRoot(char_literal57_tree, root_0);

                pushFollow(FOLLOW_atom_in_mulexpr577);
                atom58 = atom();

                state._fsp--;

                adaptor.addChild(root_0, atom58.getTree());
              }
              break;

            default:
              break loop13;
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
  // $ANTLR end "mulexpr"
}
