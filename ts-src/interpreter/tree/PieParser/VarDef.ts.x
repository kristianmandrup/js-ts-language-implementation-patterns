import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class vardef_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any { return this.tree; }
};

export class VarDef {
// $ANTLR start "vardef"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:115:1: vardef : ID ;
    vardef() : vardef_return {
      let retval = new vardef_return();
      retval.start = input.LT(1);

      let root_0 = null;

      let ID73=null;

      let ID73_tree=null;

      try {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:116:2: ( ID )
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:116:4: ID
          {
          root_0 = adaptor.nil();

          ID73=match(input,ID,FOLLOW_ID_in_vardef721); 
          ID73_tree = adaptor.create(ID73);
          adaptor.addChild(root_0, ID73_tree);


              ID73_tree.scope = currentScope;
              VariableSymbol vs = new VariableSymbol((ID73!=null?ID73.getText():null));
              currentScope.define(vs);
              

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
  // $ANTLR end "vardef"
}