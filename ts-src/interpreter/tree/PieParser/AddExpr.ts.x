import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class addexpr_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}

export class AddExpr {
  // $ANTLR start "addexpr"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:85:1: addexpr : mulexpr ( ( '+' | '-' ) mulexpr )* ;
  addexpr(): addexpr_return {
    let retval = new addexpr_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let set54 = null;

    let mulexpr53 = null;
    let mulexpr55 = null;

    let set54_tree = null;

    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:86:2: ( mulexpr ( ( '+' | '-' ) mulexpr )* )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:86:4: mulexpr ( ( '+' | '-' ) mulexpr )*
      {
        root_0 = adaptor.nil();

        pushFollow(FOLLOW_mulexpr_in_addexpr547);
        mulexpr53 = mulexpr();

        state._fsp--;

        adaptor.addChild(root_0, mulexpr53.getTree());
        // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:86:12: ( ( '+' | '-' ) mulexpr )*
        loop12: do {
          let alt12 = 2;
          let LA12_0 = input.LA(1);

          if (LA12_0 >= ADD && LA12_0 <= SUB) {
            alt12 = 1;
          }

          switch (alt12) {
            case 1:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:86:13: ( '+' | '-' ) mulexpr
              {
                set54 = input.LT(1);
                set54 = input.LT(1);
                if (input.LA(1) >= ADD && input.LA(1) <= SUB) {
                  input.consume();
                  root_0 = adaptor.becomeRoot(adaptor.create(set54), root_0);
                  state.errorRecovery = false;
                } else {
                  let mse = new MismatchedSetException(null, input);
                  throw mse;
                }

                pushFollow(FOLLOW_mulexpr_in_addexpr557);
                mulexpr55 = mulexpr();

                state._fsp--;

                adaptor.addChild(root_0, mulexpr55.getTree());
              }
              break;

            default:
              break loop12;
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
  // $ANTLR end "addexpr"
}
