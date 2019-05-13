import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class functionDefinition_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}

export class FunctionDefinition {
  // $ANTLR start "functionDefinition"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:42:1: functionDefinition : 'def' ID '(' ( vardef ( ',' vardef )* )? ')' slist ->;
  functionDefinition(): functionDefinition_return {
    let retval = new functionDefinition_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let string_literal11 = null;
    let ID12 = null;
    let char_literal13 = null;
    let char_literal15 = null;
    let char_literal17 = null;
    let vardef14 = null;

    let vardef16 = null;

    let slist18 = null;

    let string_literal11_tree = null;
    let ID12_tree = null;
    let char_literal13_tree = null;
    let char_literal15_tree = null;
    let char_literal17_tree = null;

    let stream_32 = new RewriteRuleTokenStream(adaptor, "token 32");
    let stream_DEF = new RewriteRuleTokenStream(adaptor, "token DEF");
    let stream_35 = new RewriteRuleTokenStream(adaptor, "token 35");
    let stream_ID = new RewriteRuleTokenStream(adaptor, "token ID");
    let stream_34 = new RewriteRuleTokenStream(adaptor, "token 34");

    let stream_vardef = new RewriteRuleSubtreeStream(adaptor, "rule vardef");
    let stream_slist = new RewriteRuleSubtreeStream(adaptor, "rule slist");
    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:43:2: ( 'def' ID '(' ( vardef ( ',' vardef )* )? ')' slist ->)
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:43:4: 'def' ID '(' ( vardef ( ',' vardef )* )? ')' slist
      {
        string_literal11 = match(
          input,
          DEF,
          FOLLOW_DEF_in_functionDefinition214
        );
        stream_DEF.add(string_literal11);

        ID12 = match(input, ID, FOLLOW_ID_in_functionDefinition216);
        stream_ID.add(ID12);

        let fs = new FunctionSymbol(
          ID12 != null ? ID12.getText() : null,
          currentScope
        );
        currentScope.define(fs); // def method in globals
        currentScope = fs; // set current scope to method scope

        char_literal13 = match(input, 34, FOLLOW_34_in_functionDefinition231);
        stream_34.add(char_literal13);

        // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:49:13: ( vardef ( ',' vardef )* )?
        let alt4 = 2;
        let LA4_0 = input.LA(1);

        if (LA4_0 == ID) {
          alt4 = 1;
        }
        switch (alt4) {
          case 1:
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:49:14: vardef ( ',' vardef )*
            {
              pushFollow(FOLLOW_vardef_in_functionDefinition234);
              vardef14 = vardef();

              state._fsp--;

              stream_vardef.add(vardef14.getTree());
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:49:21: ( ',' vardef )*
              loop3: do {
                let alt3 = 2;
                let LA3_0 = input.LA(1);

                if (LA3_0 == 32) {
                  alt3 = 1;
                }

                switch (alt3) {
                  case 1:
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:49:22: ',' vardef
                    {
                      char_literal15 = match(
                        input,
                        32,
                        FOLLOW_32_in_functionDefinition237
                      );
                      stream_32.add(char_literal15);

                      pushFollow(FOLLOW_vardef_in_functionDefinition239);
                      vardef16 = vardef();

                      state._fsp--;

                      stream_vardef.add(vardef16.getTree());
                    }
                    break;

                  default:
                    break loop3;
                }
              } while (true);
            }
            break;
        }

        char_literal17 = match(input, 35, FOLLOW_35_in_functionDefinition246);
        stream_35.add(char_literal17);

        currentScope = new LocalScope(fs);
        pushFollow(FOLLOW_slist_in_functionDefinition254);
        slist18 = slist();

        state._fsp--;

        stream_slist.add(slist18.getTree());

        fs.blockAST = slist18 != null ? slist18.tree : null;
        currentScope = currentScope.getEnclosingScope();
        currentScope = currentScope.getEnclosingScope();

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
        // 57:3: ->
        {
          root_0 = null;
        }

        retval.tree = root_0;
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
  // $ANTLR end "functionDefinition"
}
