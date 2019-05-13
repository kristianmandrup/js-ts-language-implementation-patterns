import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class slist_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}

export class SList {
  // $ANTLR start "slist"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:60:1: slist : ( ':' NL ( statement )+ '.' NL -> ^( BLOCK ( statement )+ ) | statement -> ^( BLOCK statement ) );
  slist(): slist_return {
    let retval = new slist_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let char_literal19 = null;
    let NL20 = null;
    let char_literal22 = null;
    let NL23 = null;

    let statement21 = null;
    let statement24 = null;

    let char_literal19_tree = null;
    let NL20_tree = null;
    let char_literal22_tree = null;
    let NL23_tree = null;
    let stream_NL = new RewriteRuleTokenStream(adaptor, "token NL");
    let stream_36 = new RewriteRuleTokenStream(adaptor, "token 36");
    let stream_DOT = new RewriteRuleTokenStream(adaptor, "token DOT");
    let stream_statement = new RewriteRuleSubtreeStream(
      adaptor,
      "rule statement"
    );
    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:2: ( ':' NL ( statement )+ '.' NL -> ^( BLOCK ( statement )+ ) | statement -> ^( BLOCK statement ) )
      let alt6 = 2;
      let LA6_0 = input.LA(1);

      if (LA6_0 == 36) {
        alt6 = 1;
      } else if (
        LA6_0 == IF ||
        (LA6_0 >= PRINT && LA6_0 <= RETURN) ||
        LA6_0 == STRUCT ||
        (LA6_0 >= ID && LA6_0 <= NL)
      ) {
        alt6 = 2;
      } else {
        let nvae = new NoViableAltException("", 6, 0, input);

        throw nvae;
      }
      switch (alt6) {
        case 1:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:4: ':' NL ( statement )+ '.' NL
          {
            char_literal19 = match(input, 36, FOLLOW_36_in_slist274);
            stream_36.add(char_literal19);

            NL20 = match(input, NL, FOLLOW_NL_in_slist276);
            stream_NL.add(NL20);

            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:11: ( statement )+
            let cnt5 = 0;
            loop5: do {
              let alt5 = 2;
              let LA5_0 = input.LA(1);

              if (
                LA5_0 == IF ||
                (LA5_0 >= PRINT && LA5_0 <= RETURN) ||
                LA5_0 == STRUCT ||
                (LA5_0 >= ID && LA5_0 <= NL)
              ) {
                alt5 = 1;
              }

              switch (alt5) {
                case 1:
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:11: statement
                  {
                    pushFollow(FOLLOW_statement_in_slist278);
                    statement21 = statement();

                    state._fsp--;

                    stream_statement.add(statement21.getTree());
                  }
                  break;

                default:
                  if (cnt5 >= 1) break loop5;
                  let eee = new EarlyExitException(5, input);
                  throw eee;
              }
              cnt5++;
            } while (true);

            char_literal22 = match(input, DOT, FOLLOW_DOT_in_slist281);
            stream_DOT.add(char_literal22);

            NL23 = match(input, NL, FOLLOW_NL_in_slist283);
            stream_NL.add(NL23);

            // AST REWRITE
            // elements: statement
            // token labels:
            // rule labels: retval
            // token list labels:
            // rule list labels:
            // wildcard labels:
            retval.tree = root_0;
            let stream_retval = new RewriteRuleSubtreeStream(
              adaptor,
              "rule retval",
              retval != null ? retval.tree : null
            );

            root_0 = adaptor.nil();
            // 61:29: -> ^( BLOCK ( statement )+ )
            {
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:32: ^( BLOCK ( statement )+ )
              {
                let root_1 = adaptor.nil();
                root_1 = adaptor.becomeRoot(
                  adaptor.create(BLOCK, "BLOCK"),
                  root_1
                );

                if (!stream_statement.hasNext()) {
                  throw new RewriteEarlyExitException();
                }
                while (stream_statement.hasNext()) {
                  adaptor.addChild(root_1, stream_statement.nextTree());
                }
                stream_statement.reset();

                adaptor.addChild(root_0, root_1);
              }
            }

            retval.tree = root_0;
          }
          break;
        case 2:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:62:4: statement
          {
            pushFollow(FOLLOW_statement_in_slist297);
            statement24 = statement();

            state._fsp--;

            stream_statement.add(statement24.getTree());

            // AST REWRITE
            // elements: statement
            // token labels:
            // rule labels: retval
            // token list labels:
            // rule list labels:
            // wildcard labels:
            retval.tree = root_0;
            let stream_retval = new RewriteRuleSubtreeStream(
              adaptor,
              "rule retval",
              retval != null ? retval.tree : null
            );

            root_0 = adaptor.nil();
            // 62:18: -> ^( BLOCK statement )
            {
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:62:21: ^( BLOCK statement )
              {
                let root_1 = adaptor.nil();
                root_1 = adaptor.becomeRoot(
                  adaptor.create(BLOCK, "BLOCK"),
                  root_1
                );

                adaptor.addChild(root_1, stream_statement.nextTree());

                adaptor.addChild(root_0, root_1);
              }
            }

            retval.tree = root_0;
          }
          break;
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
  // $ANTLR end "slist"
}
