import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class program_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}

export class Program {
  // $ANTLR start "program"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:25:1: program : ( functionDefinition | statement )+ EOF -> ^( BLOCK ( statement )+ ) ;
  program(): program_return {
    const { input } = this;
    const retval = new program_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let EOF3 = null;
    let functionDefinition1 = null;

    let statement2 = null;

    let EOF3_tree = null;

    const { adaptor } = this;

    let stream_EOF = new RewriteRuleTokenStream(adaptor, "token EOF");
    let stream_statement = new RewriteRuleSubtreeStream(
      adaptor,
      "rule statement"
    );
    let stream_functionDefinition = new RewriteRuleSubtreeStream(
      adaptor,
      "rule functionDefinition"
    );

    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:2: ( ( functionDefinition | statement )+ EOF -> ^( BLOCK ( statement )+ ) )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:4: ( functionDefinition | statement )+ EOF
      {
        // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:4: ( functionDefinition | statement )+
        let cnt1 = 0;
        loop1: do {
          let alt1 = 3;
          let LA1_0 = input.LA(1);

          if (LA1_0 == DEF) {
            alt1 = 1;
          } else if (
            LA1_0 == IF ||
            (LA1_0 >= PRINT && LA1_0 <= RETURN) ||
            LA1_0 == STRUCT ||
            (LA1_0 >= ID && LA1_0 <= NL)
          ) {
            alt1 = 2;
          }

          switch (alt1) {
            case 1:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:6: functionDefinition
              {
                pushFollow(FOLLOW_functionDefinition_in_program124);
                functionDefinition1 = functionDefinition();

                state._fsp--;

                stream_functionDefinition.add(functionDefinition1.getTree());
              }
              break;
            case 2:
              // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:27: statement
              {
                pushFollow(FOLLOW_statement_in_program128);
                statement2 = statement();

                state._fsp--;

                stream_statement.add(statement2.getTree());
              }
              break;

            default:
              if (cnt1 >= 1) break loop1;
              let eee = new EarlyExitException(1, input);
              throw eee;
          }
          cnt1++;
        } while (true);

        EOF3 = match(input, EOF, FOLLOW_EOF_in_program133);
        stream_EOF.add(EOF3);

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
        // 27:3: -> ^( BLOCK ( statement )+ )
        {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:27:6: ^( BLOCK ( statement )+ )
          {
            let root_1 = adaptor.nil();
            root_1 = adaptor.becomeRoot(adaptor.create(BLOCK, "BLOCK"), root_1);

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
  // $ANTLR end "program"
}
