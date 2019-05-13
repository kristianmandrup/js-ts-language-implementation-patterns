import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class instance_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any {
    return this.tree;
  }
}

export class Instance {
  // $ANTLR start "instance"
  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:104:1: instance : 'new' sname= ID -> ^( 'new' ID ) ;
  instance(): instance_return {
    let retval = new PieParser.instance_return();
    retval.start = input.LT(1);

    let root_0 = null;

    let sname = null;
    let string_literal69 = null;

    let sname_tree = null;
    let string_literal69_tree = null;
    let stream_NEW = new RewriteRuleTokenStream(adaptor, "token NEW");
    let stream_ID = new RewriteRuleTokenStream(adaptor, "token ID");

    try {
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:109:2: ( 'new' sname= ID -> ^( 'new' ID ) )
      // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:109:4: 'new' sname= ID
      {
        string_literal69 = match(input, NEW, FOLLOW_NEW_in_instance677);
        stream_NEW.add(string_literal69);

        sname = match(input, ID, FOLLOW_ID_in_instance681);
        stream_ID.add(sname);

        // AST REWRITE
        // elements: ID, NEW
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
        // 110:3: -> ^( 'new' ID )
        {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:110:6: ^( 'new' ID )
          {
            let root_1 = adaptor.nil();
            root_1 = adaptor.becomeRoot(stream_NEW.nextNode(), root_1);

            adaptor.addChild(root_1, stream_ID.nextNode());

            adaptor.addChild(root_0, root_1);
          }
        }

        retval.tree = root_0;
      }

      retval.stop = input.LT(-1);

      retval.tree = adaptor.rulePostProcessing(root_0);
      adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

      let nameNode = retval.tree.getChild(0);
      nameNode.scope = currentScope;
    } catch (re) {
      reportError(re);
      recover(input, re);
      retval.tree = adaptor.errorNode(input, retval.start, input.LT(-1), re);
    } finally {
    }
    return retval;
  }
  // $ANTLR end "instance"
}
