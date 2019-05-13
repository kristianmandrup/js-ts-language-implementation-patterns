import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class structDefinition_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}
// $ANTLR start "structDefinition"
// /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:30:1: structDefinition : 'struct' name= ID '{' vardef ( ',' vardef )* '}' NL ->;

export class StructDefinition {
  structDefinition(): structDefinition_return {
    const retval = new structDefinition_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let name = null;
    let string_literal4 = null;
    let char_literal5 = null;
    let char_literal7 = null;
    let char_literal9 = null;
    let NL10 = null;
    let vardef6 = null;

    let vardef8 = null;

    let name_tree = null;
    let string_literal4_tree = null;
    let char_literal5_tree = null;
    let char_literal7_tree = null;
    let char_literal9_tree = null;
    let NL10_tree = null;

    const { adaptor } = this;

    let stream_32 = new RewriteRuleTokenStream(adaptor, "token 32");
    let stream_NL = new RewriteRuleTokenStream(adaptor, "token NL");
    let stream_33 = new RewriteRuleTokenStream(adaptor, "token 33");
    let stream_31 = new RewriteRuleTokenStream(adaptor, "token 31");
    let stream_STRUCT = new RewriteRuleTokenStream(adaptor, "token STRUCT");
    let stream_ID = new RewriteRuleTokenStream(adaptor, "token ID");
    let stream_vardef = new RewriteRuleSubtreeStream(adaptor, "rule vardef");
    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:31:5: ( 'struct' name= ID '{' vardef ( ',' vardef )* '}' NL ->)
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:31:9: 'struct' name= ID '{' vardef ( ',' vardef )* '}' NL
      {
        string_literal4 = match(
          input,
          STRUCT,
          FOLLOW_STRUCT_in_structDefinition162
        );
        stream_STRUCT.add(string_literal4);

        name = match(input, ID, FOLLOW_ID_in_structDefinition166);
        stream_ID.add(name);

        char_literal5 = match(input, 31, FOLLOW_31_in_structDefinition168);
        stream_31.add(char_literal5);

        let ss = new StructSymbol(
          name != null ? name.getText() : null,
          currentScope
        );
        currentScope.define(ss); // def struct in current scope
        currentScope = ss; // set current scope to struct scope

        pushFollow(FOLLOW_vardef_in_structDefinition180);
        vardef6 = vardef();

        state._fsp--;

        stream_vardef.add(vardef6.getTree());
        // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:37:10: ( ',' vardef )*
        loop2: do {
          let alt2 = 2;
          let LA2_0 = input.LA(1);

          if (LA2_0 == 32) {
            alt2 = 1;
          }

          switch (alt2) {
            case 1:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:37:11: ',' vardef
              {
                char_literal7 = match(
                  input,
                  32,
                  FOLLOW_32_in_structDefinition183
                );
                stream_32.add(char_literal7);

                pushFollow(FOLLOW_vardef_in_structDefinition185);
                vardef8 = vardef();

                state._fsp--;

                stream_vardef.add(vardef8.getTree());
              }
              break;

            default:
              break loop2;
          }
        } while (true);

        char_literal9 = match(input, 33, FOLLOW_33_in_structDefinition189);
        stream_33.add(char_literal9);

        NL10 = match(input, NL, FOLLOW_NL_in_structDefinition191);
        stream_NL.add(NL10);

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
        // 39:3: ->
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
    }
    return retval;
  }
}
// $ANTLR end "structDefinition"
