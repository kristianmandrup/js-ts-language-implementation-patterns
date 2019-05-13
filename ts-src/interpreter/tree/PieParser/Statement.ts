import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class statement_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}

export class Statement {
  // $ANTLR start "statement"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:65:1: statement : ( structDefinition | qid '=' expr NL -> ^( '=' qid expr ) | 'return' expr NL -> ^( 'return' expr ) | 'print' expr NL -> ^( 'print' expr ) | 'if' expr c= slist ( 'else' el= slist )? -> ^( 'if' expr $c ( $el)? ) | 'while' expr slist -> ^( 'while' expr slist ) | call NL -> call | NL ->);
  statement(): statement_return {
    let retval = new statement_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let char_literal27 = null;
    let NL29 = null;
    let string_literal30 = null;
    let NL32 = null;
    let string_literal33 = null;
    let NL35 = null;
    let string_literal36 = null;
    let string_literal38 = null;
    let string_literal39 = null;
    let NL43 = null;
    let NL44 = null;
    let c = null;

    let el = null;

    let structDefinition25 = null;

    let qid26 = null;

    let expr28 = null;

    let expr31 = null;

    let expr34 = null;

    let expr37 = null;

    let expr40 = null;

    let slist41 = null;

    let call42 = null;

    let char_literal27_tree = null;
    let NL29_tree = null;
    let string_literal30_tree = null;
    let NL32_tree = null;
    let string_literal33_tree = null;
    let NL35_tree = null;
    let string_literal36_tree = null;
    let string_literal38_tree = null;
    let string_literal39_tree = null;
    let NL43_tree = null;
    let NL44_tree = null;

    let stream_NL = new RewriteRuleTokenStream(adaptor, "token NL");
    let stream_PRINT = new RewriteRuleTokenStream(adaptor, "token PRINT");
    let stream_37 = new RewriteRuleTokenStream(adaptor, "token 37");
    let stream_RETURN = new RewriteRuleTokenStream(adaptor, "token RETURN");
    let stream_WHILE = new RewriteRuleTokenStream(adaptor, "token WHILE");
    let stream_IF = new RewriteRuleTokenStream(adaptor, "token IF");
    let stream_ASSIGN = new RewriteRuleTokenStream(adaptor, "token ASSIGN");
    let stream_qid = new RewriteRuleSubtreeStream(adaptor, "rule qid");
    let stream_call = new RewriteRuleSubtreeStream(adaptor, "rule call");
    let stream_expr = new RewriteRuleSubtreeStream(adaptor, "rule expr");
    let stream_slist = new RewriteRuleSubtreeStream(adaptor, "rule slist");
    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:66:2: ( structDefinition | qid '=' expr NL -> ^( '=' qid expr ) | 'return' expr NL -> ^( 'return' expr ) | 'print' expr NL -> ^( 'print' expr ) | 'if' expr c= slist ( 'else' el= slist )? -> ^( 'if' expr $c ( $el)? ) | 'while' expr slist -> ^( 'while' expr slist ) | call NL -> call | NL ->)
      let alt8 = 8;
      alt8 = dfa8.predict(input);
      switch (alt8) {
        case 1:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:66:4: structDefinition
          {
            root_0 = adaptor.nil();

            pushFollow(FOLLOW_structDefinition_in_statement320);
            structDefinition25 = structDefinition();

            state._fsp--;

            adaptor.addChild(root_0, structDefinition25.getTree());
          }
          break;
        case 2:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:67:4: qid '=' expr NL
          {
            pushFollow(FOLLOW_qid_in_statement325);
            qid26 = qid();

            state._fsp--;

            stream_qid.add(qid26.getTree());
            char_literal27 = match(
              input,
              ASSIGN,
              FOLLOW_ASSIGN_in_statement327
            );
            stream_ASSIGN.add(char_literal27);

            pushFollow(FOLLOW_expr_in_statement329);
            expr28 = expr();

            state._fsp--;

            stream_expr.add(expr28.getTree());
            NL29 = match(input, NL, FOLLOW_NL_in_statement331);
            stream_NL.add(NL29);

            // AST REWRITE
            // elements: ASSIGN, qid, expr
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
            // 67:23: -> ^( '=' qid expr )
            {
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:67:26: ^( '=' qid expr )
              {
                let root_1 = adaptor.nil();
                root_1 = adaptor.becomeRoot(stream_ASSIGN.nextNode(), root_1);

                adaptor.addChild(root_1, stream_qid.nextTree());
                adaptor.addChild(root_1, stream_expr.nextTree());

                adaptor.addChild(root_0, root_1);
              }
            }

            retval.tree = root_0;
          }
          break;
        case 3:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:68:4: 'return' expr NL
          {
            string_literal30 = match(
              input,
              RETURN,
              FOLLOW_RETURN_in_statement349
            );
            stream_RETURN.add(string_literal30);

            pushFollow(FOLLOW_expr_in_statement351);
            expr31 = expr();

            state._fsp--;

            stream_expr.add(expr31.getTree());
            NL32 = match(input, NL, FOLLOW_NL_in_statement353);
            stream_NL.add(NL32);

            // AST REWRITE
            // elements: expr, RETURN
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
            // 68:25: -> ^( 'return' expr )
            {
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:68:28: ^( 'return' expr )
              {
                let root_1 = adaptor.nil();
                root_1 = adaptor.becomeRoot(stream_RETURN.nextNode(), root_1);

                adaptor.addChild(root_1, stream_expr.nextTree());

                adaptor.addChild(root_0, root_1);
              }
            }

            retval.tree = root_0;
          }
          break;
        case 4:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:69:4: 'print' expr NL
          {
            string_literal33 = match(
              input,
              PRINT,
              FOLLOW_PRINT_in_statement370
            );
            stream_PRINT.add(string_literal33);

            pushFollow(FOLLOW_expr_in_statement372);
            expr34 = expr();

            state._fsp--;

            stream_expr.add(expr34.getTree());
            NL35 = match(input, NL, FOLLOW_NL_in_statement374);
            stream_NL.add(NL35);

            // AST REWRITE
            // elements: PRINT, expr
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
            // 69:24: -> ^( 'print' expr )
            {
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:69:27: ^( 'print' expr )
              {
                let root_1 = adaptor.nil();
                root_1 = adaptor.becomeRoot(stream_PRINT.nextNode(), root_1);

                adaptor.addChild(root_1, stream_expr.nextTree());

                adaptor.addChild(root_0, root_1);
              }
            }

            retval.tree = root_0;
          }
          break;
        case 5:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:70:4: 'if' expr c= slist ( 'else' el= slist )?
          {
            string_literal36 = match(input, IF, FOLLOW_IF_in_statement391);
            stream_IF.add(string_literal36);

            pushFollow(FOLLOW_expr_in_statement393);
            expr37 = expr();

            state._fsp--;

            stream_expr.add(expr37.getTree());
            pushFollow(FOLLOW_slist_in_statement397);
            c = slist();

            state._fsp--;

            stream_slist.add(c.getTree());
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:70:22: ( 'else' el= slist )?
            let alt7 = 2;
            let LA7_0 = input.LA(1);

            if (LA7_0 == 37) {
              alt7 = 1;
            }
            switch (alt7) {
              case 1:
                // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:70:23: 'else' el= slist
                {
                  string_literal38 = match(
                    input,
                    37,
                    FOLLOW_37_in_statement400
                  );
                  stream_37.add(string_literal38);

                  pushFollow(FOLLOW_slist_in_statement404);
                  el = slist();

                  state._fsp--;

                  stream_slist.add(el.getTree());
                }
                break;
            }

            // AST REWRITE
            // elements: c, expr, el, IF
            // token labels:
            // rule labels: el, c, retval
            // token list labels:
            // rule list labels:
            // wildcard labels:
            retval.tree = root_0;
            let stream_el = new RewriteRuleSubtreeStream(
              adaptor,
              "rule el",
              el != null ? el.tree : null
            );
            let stream_c = new RewriteRuleSubtreeStream(
              adaptor,
              "rule c",
              c != null ? c.tree : null
            );
            let stream_retval = new RewriteRuleSubtreeStream(
              adaptor,
              "rule retval",
              retval != null ? retval.tree : null
            );

            root_0 = adaptor.nil();
            // 70:41: -> ^( 'if' expr $c ( $el)? )
            {
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:70:44: ^( 'if' expr $c ( $el)? )
              {
                let root_1 = adaptor.nil();
                root_1 = adaptor.becomeRoot(stream_IF.nextNode(), root_1);

                adaptor.addChild(root_1, stream_expr.nextTree());
                adaptor.addChild(root_1, stream_c.nextTree());
                // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:70:59: ( $el)?
                if (stream_el.hasNext()) {
                  adaptor.addChild(root_1, stream_el.nextTree());
                }
                stream_el.reset();

                adaptor.addChild(root_0, root_1);
              }
            }

            retval.tree = root_0;
          }
          break;
        case 6:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:71:4: 'while' expr slist
          {
            string_literal39 = match(
              input,
              WHILE,
              FOLLOW_WHILE_in_statement426
            );
            stream_WHILE.add(string_literal39);

            pushFollow(FOLLOW_expr_in_statement428);
            expr40 = expr();

            state._fsp--;

            stream_expr.add(expr40.getTree());
            pushFollow(FOLLOW_slist_in_statement430);
            slist41 = slist();

            state._fsp--;

            stream_slist.add(slist41.getTree());

            // AST REWRITE
            // elements: slist, expr, WHILE
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
            // 71:25: -> ^( 'while' expr slist )
            {
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:71:28: ^( 'while' expr slist )
              {
                let root_1 = adaptor.nil();
                root_1 = adaptor.becomeRoot(stream_WHILE.nextNode(), root_1);

                adaptor.addChild(root_1, stream_expr.nextTree());
                adaptor.addChild(root_1, stream_slist.nextTree());

                adaptor.addChild(root_0, root_1);
              }
            }

            retval.tree = root_0;
          }
          break;
        case 7:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:72:4: call NL
          {
            pushFollow(FOLLOW_call_in_statement447);
            call42 = call();

            state._fsp--;

            stream_call.add(call42.getTree());
            NL43 = match(input, NL, FOLLOW_NL_in_statement449);
            stream_NL.add(NL43);

            // AST REWRITE
            // elements: call
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
            // 72:17: -> call
            {
              adaptor.addChild(root_0, stream_call.nextTree());
            }

            retval.tree = root_0;
          }
          break;
        case 8:
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:73:4: NL
          {
            NL44 = match(input, NL, FOLLOW_NL_in_statement463);
            stream_NL.add(NL44);

            // AST REWRITE
            // elements:
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
            // 73:13: ->
            {
              root_0 = null;
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
}
// $ANTLR end "statement"
