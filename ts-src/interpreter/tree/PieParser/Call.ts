import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class call_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}

export class Call {
  // $ANTLR start "call"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:76:1: call : name= ID '(' ( expr ( ',' expr )* )? ')' -> ^( CALL ID ( expr )* ) ;
  call(): call_return {
    let retval = new call_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let name = null;
    let char_literal45 = null;
    let char_literal47 = null;
    let char_literal49 = null;
    let expr46 = null;

    let expr48 = null;

    let name_tree = null;
    let char_literal45_tree = null;
    let char_literal47_tree = null;
    let char_literal49_tree = null;
    let stream_32 = new RewriteRuleTokenStream(adaptor, "token 32");
    let stream_35 = new RewriteRuleTokenStream(adaptor, "token 35");
    let stream_ID = new RewriteRuleTokenStream(adaptor, "token ID");
    let stream_34 = new RewriteRuleTokenStream(adaptor, "token 34");
    let stream_expr = new RewriteRuleSubtreeStream(adaptor, "rule expr");
    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:2: (name= ID '(' ( expr ( ',' expr )* )? ')' -> ^( CALL ID ( expr )* ) )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:4: name= ID '(' ( expr ( ',' expr )* )? ')'
      {
        name = match(input, ID, FOLLOW_ID_in_call489);
        stream_ID.add(name);

        char_literal45 = match(input, 34, FOLLOW_34_in_call491);
        stream_34.add(char_literal45);

        // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:16: ( expr ( ',' expr )* )?
        let alt10 = 2;
        let LA10_0 = input.LA(1);

        if (
          (LA10_0 >= NEW && LA10_0 <= ID) ||
          (LA10_0 >= INT && LA10_0 <= STRING) ||
          LA10_0 == 34
        ) {
          alt10 = 1;
        }
        switch (alt10) {
          case 1:
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:17: expr ( ',' expr )*
            {
              pushFollow(FOLLOW_expr_in_call494);
              expr46 = expr();

              state._fsp--;

              stream_expr.add(expr46.getTree());
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:22: ( ',' expr )*
              loop9: do {
                let alt9 = 2;
                let LA9_0 = input.LA(1);

                if (LA9_0 == 32) {
                  alt9 = 1;
                }

                switch (alt9) {
                  case 1:
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:23: ',' expr
                    {
                      char_literal47 = match(input, 32, FOLLOW_32_in_call497);
                      stream_32.add(char_literal47);

                      pushFollow(FOLLOW_expr_in_call499);
                      expr48 = expr();

                      state._fsp--;

                      stream_expr.add(expr48.getTree());
                    }
                    break;

                  default:
                    break loop9;
                }
              } while (true);
            }
            break;
        }

        char_literal49 = match(input, 35, FOLLOW_35_in_call506);
        stream_35.add(char_literal49);

        // AST REWRITE
        // elements: expr, ID
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
        // 81:41: -> ^( CALL ID ( expr )* )
        {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:44: ^( CALL ID ( expr )* )
          {
            let root_1 = adaptor.nil();
            root_1 = adaptor.becomeRoot(adaptor.create(CALL, "CALL"), root_1);

            adaptor.addChild(root_1, stream_ID.nextNode());
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:54: ( expr )*
            while (stream_expr.hasNext()) {
              adaptor.addChild(root_1, stream_expr.nextTree());
            }
            stream_expr.reset();

            adaptor.addChild(root_0, root_1);
          }
        }

        retval.tree = root_0;
      }

      retval.stop = input.LT(-1);

      retval.tree = adaptor.rulePostProcessing(root_0);
      adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

      retval.tree.scope = currentScope;
      //(retval.tree).symbol = currentScope.resolve((name!=null?name.getText():null));
    } catch (re) {
      reportError(re);
      recover(input, re);
      retval.tree = adaptor.errorNode(input, retval.start, input.LT(-1), re);
    } finally {
    }
    return retval;
  }
  // $ANTLR end "call"
}
