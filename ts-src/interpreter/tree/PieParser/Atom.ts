import { ParserRuleReturnScope } from "../ParserRuleReturnScope";

class atom_return extends ParserRuleReturnScope {
  tree?: PieAST;
  getTree(): any { return this.tree; }
};

export class Atom {
// $ANTLR start "atom"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:93:1: atom : ( INT | CHAR | FLOAT | STRING | qid | call | instance | '(' expr ')' -> expr );
    atom(): atom_return  {
      let retval = new atom_return();
      retval.start = input.LT(1);

      let root_0 = null;

      let INT59=null;
      let CHAR60=null;
      let FLOAT61=null;
      let STRING62=null;
      let char_literal66=null;
      let char_literal68=null;
      let qid63 = null;

      let call64 = null;

      PieParser.instance_return instance65 = null;

      let expr67 = null;


      let INT59_tree=null;
      let CHAR60_tree=null;
      let FLOAT61_tree=null;
      let STRING62_tree=null;
      let char_literal66_tree=null;
      let char_literal68_tree=null;
      let stream_35=new RewriteRuleTokenStream(adaptor,"token 35");
      let stream_34=new RewriteRuleTokenStream(adaptor,"token 34");
      let stream_expr=new RewriteRuleSubtreeStream(adaptor,"rule expr");
      try {
          // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:94:2: ( INT | CHAR | FLOAT | STRING | qid | call | instance | '(' expr ')' -> expr )
          let alt14=8;
          alt14 = dfa14.predict(input);
          switch (alt14) {
              case 1 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:94:4: INT
                  {
                  root_0 = adaptor.nil();

                  INT59=match(input,INT,FOLLOW_INT_in_atom591); 
                  INT59_tree = adaptor.create(INT59);
                  adaptor.addChild(root_0, INT59_tree);


                  }
                  break;
              case 2 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:95:4: CHAR
                  {
                  root_0 = adaptor.nil();

                  CHAR60=match(input,CHAR,FOLLOW_CHAR_in_atom602); 
                  CHAR60_tree = adaptor.create(CHAR60);
                  adaptor.addChild(root_0, CHAR60_tree);


                  }
                  break;
              case 3 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:96:4: FLOAT
                  {
                  root_0 = adaptor.nil();

                  FLOAT61=match(input,FLOAT,FOLLOW_FLOAT_in_atom612); 
                  FLOAT61_tree = adaptor.create(FLOAT61);
                  adaptor.addChild(root_0, FLOAT61_tree);


                  }
                  break;
              case 4 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:97:4: STRING
                  {
                  root_0 = adaptor.nil();

                  STRING62=match(input,STRING,FOLLOW_STRING_in_atom622); 
                  STRING62_tree = adaptor.create(STRING62);
                  adaptor.addChild(root_0, STRING62_tree);


                  }
                  break;
              case 5 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:98:4: qid
                  {
                  root_0 = adaptor.nil();

                  pushFollow(FOLLOW_qid_in_atom632);
                  qid63=qid();

                  state._fsp--;

                  adaptor.addChild(root_0, qid63.getTree());

                  }
                  break;
              case 6 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:99:4: call
                  {
                  root_0 = adaptor.nil();

                  pushFollow(FOLLOW_call_in_atom643);
                  call64=call();

                  state._fsp--;

                  adaptor.addChild(root_0, call64.getTree());

                  }
                  break;
              case 7 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:100:4: instance
                  {
                  root_0 = adaptor.nil();

                  pushFollow(FOLLOW_instance_in_atom648);
                  instance65=instance();

                  state._fsp--;

                  adaptor.addChild(root_0, instance65.getTree());

                  }
                  break;
              case 8 :
                  // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:101:4: '(' expr ')'
                  {
                  char_literal66=match(input,34,FOLLOW_34_in_atom653);  
                  stream_34.add(char_literal66);

                  pushFollow(FOLLOW_expr_in_atom655);
                  expr67=expr();

                  state._fsp--;

                  stream_expr.add(expr67.getTree());
                  char_literal68=match(input,35,FOLLOW_35_in_atom657);  
                  stream_35.add(char_literal68);



                  // AST REWRITE
                  // elements: expr
                  // token labels: 
                  // rule labels: retval
                  // token list labels: 
                  // rule list labels: 
                  // wildcard labels: 
                  retval.tree = root_0;
                  let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

                  root_0 = adaptor.nil();
                  // 101:17: -> expr
                  {
                      adaptor.addChild(root_0, stream_expr.nextTree());

                  }

                  retval.tree = root_0;
                  }
                  break;

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
  // $ANTLR end "atom"
}