import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class expr_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any { return this.tree; }
};


export class Expr {
// $ANTLR start "expr"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:83:1: expr : addexpr ( ( '==' | '<' ) addexpr )? ;
    expr() : expr_return {
      let retval = new expr_return();
      retval.start = input.LT(1);

      let root_0 = null;

      let set51=null;

      let  addexpr50 = null;
      let  addexpr52 = null;

      let set51_tree=null;

      try {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:83:5: ( addexpr ( ( '==' | '<' ) addexpr )? )
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:83:7: addexpr ( ( '==' | '<' ) addexpr )?
          {
          root_0 = adaptor.nil();

          pushFollow(FOLLOW_addexpr_in_expr525);
          addexpr50=addexpr();

          state._fsp--;

          adaptor.addChild(root_0, addexpr50.getTree());
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:83:15: ( ( '==' | '<' ) addexpr )?
          let alt11=2;
          let LA11_0 = input.LA(1);

          if ( ((LA11_0>=EQ && LA11_0<=LT)) ) {
              alt11=1;
          }
          switch (alt11) {
              case 1 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:83:16: ( '==' | '<' ) addexpr
                  {
                  set51=input.LT(1);
                  set51=input.LT(1);
                  if ( (input.LA(1)>=EQ && input.LA(1)<=LT) ) {
                      input.consume();
                      root_0 = adaptor.becomeRoot(adaptor.create(set51), root_0);
                      state.errorRecovery=false;
                  }
                  else {
                      MismatchedSetException mse = new MismatchedSetException(null,input);
                      throw mse;
                  }

                  pushFollow(FOLLOW_addexpr_in_expr535);
                  addexpr52=addexpr();

                  state._fsp--;

                  adaptor.addChild(root_0, addexpr52.getTree());

                  }
                  break;

          }


          }

          retval.stop = input.LT(-1);

          retval.tree = adaptor.rulePostProcessing(root_0);
          adaptor.setTokenBoundaries(retval.tree, retval.start, retval.stop);

      }
      catch (re) {
          reportError(re);
          recover(input,re);
    retval.tree = adaptor.errorNode(input, retval.start, input.LT(-1), re);

      }
      finally {
      }
      return retval;
  }
  // $ANTLR end "expr"
}