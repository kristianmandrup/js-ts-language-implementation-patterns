/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
***/
// $ANTLR 3.2 Sep 23, 2009 12:02:23 /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g 2009-09-23 17:37:44

/** A simple dynamically-typed language that smacks of Python.
 *  This builds a tree, then we'll interpret it with a tree grammar
 *  Build a convential symbol table while parsing.  Save
 *  symbol ptrs in AST nodes.
 */

import { TokenStream } from '../TokenStream'
import { ParserRuleReturnScope } from '../ParserRuleReturnScope'
import { PieAST } from '../PieAST'

class program_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class structDefinition_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class functionDefinition_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class slist_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};


class statement_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class call_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class expr_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class mulexpr_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class addexpr_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class atom_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class vardef_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class instance_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

class qid_return extends ParserRuleReturnScope {
    tree?: PieAST;
    getTree(): any { return this.tree; }
};

import { Interpreter } from '../../stack/Interpreter'
import { RecognizerSharedState } from '../../asm/RecognizerSharedState';
import { Scope } from '../Scope';

class Parser {
    input: TokenStream
    state: RecognizerSharedState

    constructor(input: TokenStream, state: RecognizerSharedState) {
        this.input = input
        this.state = state
    }
}

class RewriteRuleTokenStream {
    constructor(adaptor: any, input: any) {}
}

class RewriteRuleSubtreeStream {
    constructor(adaptor: any, input: any) {}
}


class TreeAdaptor {}

class CommonTreeAdaptor {}


export class PieParser extends Parser {
    public static tokenNames = ["<invalid>", "<EOR>", "<DOWN>", "<UP>", "ARGS", "FIELDS", "BLOCK", "CALL", "IF", "ASSIGN", "PRINT", "WHILE", "RETURN", "DEF", "ADD", "SUB", "MUL", "EQ", "LT", "STRUCT", "DOT", "NEW", "ID", "NL", "INT", "CHAR", "FLOAT", "STRING", "LETTER", "WS", "SL_COMMENT", "'{'", "','", "'}'", "'('", "')'", "':'", "'else'"]
        
    public static LETTER=28;
    public static T__35=35;
    public static ARGS=4;
    public static DEF=13;
    public static T__36=36;
    public static WHILE=11;
    public static WS=29;
    public static CHAR=25;
    public static STRING=27;
    public static NEW=21;
    public static EQ=17;
    public static FLOAT=26;
    public static LT=18;
    public static T__33=33;
    public static DOT=20;
    public static BLOCK=6;
    public static MUL=16;
    public static NL=23;
    public static PRINT=10;
    public static RETURN=12;
    public static INT=24;
    public static T__31=31;
    public static IF=8;
    public static EOF=-1;
    public static STRUCT=19;
    public static T__32=32;
    public static ASSIGN=9;
    public static CALL=7;
    public static T__37=37;
    public static SUB=15;
    public static T__34=34;
    public static SL_COMMENT=30;
    public static ADD=14;
    public static ID=22;
    public static FIELDS=5;

    // delegates
    // delegators


    constructor(input: TokenStream, opts: any = {}) {
        super(input, opts.state || new RecognizerSharedState());            
        this.interp = opts.interp;
        this.currentScope = this.interp.globalScope;
    }

        
    protected adaptor: TreeAdaptor = new CommonTreeAdaptor();

    public setTreeAdaptor(adaptor: TreeAdaptor) {
        this.adaptor = adaptor;
    }
    public getTreeAdaptor(): TreeAdaptor  {
        return adaptor;
    }

    public  getTokenNames(): string[] { return PieParser.tokenNames; }
    public  getGrammarFileName(): string { return "/Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g"; }


    interp: Interpreter;
    currentScope?: Scope;

    // $ANTLR start "program"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:25:1: program : ( functionDefinition | statement )+ EOF -> ^( BLOCK ( statement )+ ) ;
    program(): program_return {
        const { input } = this
        const retval = new program_return();
        retval.start = input.LT(1);

        let root_0 = null;

        let EOF3=null;
        let functionDefinition1 = null;

        let statement2 = null;

        let EOF3_tree=null;

        let stream_EOF = new RewriteRuleTokenStream(adaptor,"token EOF");
        let stream_statement = new RewriteRuleSubtreeStream(adaptor,"rule statement");
        let stream_functionDefinition = new RewriteRuleSubtreeStream(adaptor,"rule functionDefinition");

        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:2: ( ( functionDefinition | statement )+ EOF -> ^( BLOCK ( statement )+ ) )
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:4: ( functionDefinition | statement )+ EOF
            {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:4: ( functionDefinition | statement )+
            let cnt1=0;
            loop1:
            do {
                let alt1=3;
                let LA1_0 = input.LA(1);

                if ( (LA1_0==DEF) ) {
                    alt1=1;
                }
                else if ( (LA1_0==IF||(LA1_0>=PRINT && LA1_0<=RETURN)||LA1_0==STRUCT||(LA1_0>=ID && LA1_0<=NL)) ) {
                    alt1=2;
                }


                switch (alt1) {
            	case 1 :
            	    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:6: functionDefinition
            	    {
            	    pushFollow(FOLLOW_functionDefinition_in_program124);
            	    functionDefinition1=functionDefinition();

            	    state._fsp--;

            	    stream_functionDefinition.add(functionDefinition1.getTree());

            	    }
            	    break;
            	case 2 :
            	    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:26:27: statement
            	    {
            	    pushFollow(FOLLOW_statement_in_program128);
            	    statement2=statement();

            	    state._fsp--;

            	    stream_statement.add(statement2.getTree());

            	    }
            	    break;

            	default :
            	    if ( cnt1 >= 1 ) break loop1;
                        let eee =
                            new EarlyExitException(1, input);
                        throw eee;
                }
                cnt1++;
            } while (true);

            EOF3= match(input,EOF,FOLLOW_EOF_in_program133);  
            stream_EOF.add(EOF3);



            // AST REWRITE
            // elements: statement
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            // wildcard labels: 
            retval.tree = root_0;
            let stream_retval = new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

            root_0 = adaptor.nil();
            // 27:3: -> ^( BLOCK ( statement )+ )
            {
                // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:27:6: ^( BLOCK ( statement )+ )
                {
                let root_1 = adaptor.nil();
                root_1 = adaptor.becomeRoot(adaptor.create(BLOCK, "BLOCK"), root_1);

                if ( !(stream_statement.hasNext()) ) {
                    throw new RewriteEarlyExitException();
                }
                while ( stream_statement.hasNext() ) {
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

        }
        catch (re) {
            reportError(re);
            recover(input,re);
    	retval.tree = adaptor.errorNode(input, retval.start, input.LT(-1), re);

        }
        return retval;
    }
    // $ANTLR end "program"

    // $ANTLR start "structDefinition"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:30:1: structDefinition : 'struct' name= ID '{' vardef ( ',' vardef )* '}' NL ->;
    structDefinition(): structDefinition_return {
        const retval = new PieParser.structDefinition_return();
        retval.start = input.LT(1);

        let root_0 = null;

        let name=null;
        let string_literal4=null;
        let char_literal5=null;
        let char_literal7=null;
        let char_literal9=null;
        let NL10=null;
        let vardef6 = null;

        let vardef8 = null;


        let name_tree=null;
        let string_literal4_tree=null;
        let char_literal5_tree=null;
        let char_literal7_tree=null;
        let char_literal9_tree=null;
        let NL10_tree=null;

        const { adaptor } = this

        let stream_32=new RewriteRuleTokenStream(adaptor,"token 32");
        let stream_NL=new RewriteRuleTokenStream(adaptor,"token NL");
        let stream_33=new RewriteRuleTokenStream(adaptor,"token 33");
        let stream_31=new RewriteRuleTokenStream(adaptor,"token 31");
        let stream_STRUCT=new RewriteRuleTokenStream(adaptor,"token STRUCT");
        let stream_ID=new RewriteRuleTokenStream(adaptor,"token ID");
        let stream_vardef=new RewriteRuleSubtreeStream(adaptor,"rule vardef");
        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:31:5: ( 'struct' name= ID '{' vardef ( ',' vardef )* '}' NL ->)
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:31:9: 'struct' name= ID '{' vardef ( ',' vardef )* '}' NL
            {
            string_literal4=match(input,STRUCT,FOLLOW_STRUCT_in_structDefinition162);  
            stream_STRUCT.add(string_literal4);

            name=match(input,ID,FOLLOW_ID_in_structDefinition166);  
            stream_ID.add(name);

            char_literal5=match(input,31,FOLLOW_31_in_structDefinition168);  
            stream_31.add(char_literal5);


            let ss = new StructSymbol((name!=null?name.getText():null), currentScope);
            currentScope.define(ss); // def struct in current scope
            currentScope = ss;       // set current scope to struct scope
            		
            pushFollow(FOLLOW_vardef_in_structDefinition180);
            vardef6=vardef();

            state._fsp--;

            stream_vardef.add(vardef6.getTree());
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:37:10: ( ',' vardef )*
            loop2:
            do {
                let alt2=2;
                let LA2_0 = input.LA(1);

                if ( (LA2_0==32) ) {
                    alt2=1;
                }


                switch (alt2) {
            	case 1 :
            	    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:37:11: ',' vardef
            	    {
            	    char_literal7=match(input,32,FOLLOW_32_in_structDefinition183);  
            	    stream_32.add(char_literal7);

            	    pushFollow(FOLLOW_vardef_in_structDefinition185);
            	    vardef8=vardef();

            	    state._fsp--;

            	    stream_vardef.add(vardef8.getTree());

            	    }
            	    break;

            	default :
            	    break loop2;
                }
            } while (true);

            char_literal9=match(input,33,FOLLOW_33_in_structDefinition189);  
            stream_33.add(char_literal9);

            NL10=match(input,NL,FOLLOW_NL_in_structDefinition191);  
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
            let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

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

        }
        catch (re) {
            reportError(re);
            recover(input,re);
    	retval.tree = adaptor.errorNode(input, retval.start, input.LT(-1), re);

        }
        return retval;
    }
    // $ANTLR end "structDefinition"

    // $ANTLR start "functionDefinition"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:42:1: functionDefinition : 'def' ID '(' ( vardef ( ',' vardef )* )? ')' slist ->;
    functionDefinition(): functionDefinition_return {
        let retval = new PieParser.functionDefinition_return();
        retval.start = input.LT(1);

        let root_0 = null;

        let string_literal11=null;
        let ID12=null;
        let char_literal13=null;
        let char_literal15=null;
        let char_literal17=null;
        let vardef14 = null;

        let vardef16 = null;

        let slist18 = null;


        let string_literal11_tree=null;
        let ID12_tree=null;
        let char_literal13_tree=null;
        let char_literal15_tree=null;
        let char_literal17_tree=null;
        
        let stream_32=new RewriteRuleTokenStream(adaptor,"token 32");
        let stream_DEF=new RewriteRuleTokenStream(adaptor,"token DEF");
        let stream_35=new RewriteRuleTokenStream(adaptor,"token 35");
        let stream_ID=new RewriteRuleTokenStream(adaptor,"token ID");
        let stream_34=new RewriteRuleTokenStream(adaptor,"token 34");
        
        let stream_vardef=new RewriteRuleSubtreeStream(adaptor,"rule vardef");
        let stream_slist=new RewriteRuleSubtreeStream(adaptor,"rule slist");
        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:43:2: ( 'def' ID '(' ( vardef ( ',' vardef )* )? ')' slist ->)
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:43:4: 'def' ID '(' ( vardef ( ',' vardef )* )? ')' slist
            {
            string_literal11=match(input,DEF,FOLLOW_DEF_in_functionDefinition214);  
            stream_DEF.add(string_literal11);

            ID12=match(input,ID,FOLLOW_ID_in_functionDefinition216);  
            stream_ID.add(ID12);


            let fs = new FunctionSymbol((ID12!=null?ID12.getText():null),currentScope);
            currentScope.define(fs); // def method in globals
            currentScope = fs;       // set current scope to method scope
                    
            char_literal13=match(input,34,FOLLOW_34_in_functionDefinition231);  
            stream_34.add(char_literal13);

            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:49:13: ( vardef ( ',' vardef )* )?
            let alt4=2;
            let LA4_0 = input.LA(1);

            if ( (LA4_0==ID) ) {
                alt4=1;
            }
            switch (alt4) {
                case 1 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:49:14: vardef ( ',' vardef )*
                    {
                    pushFollow(FOLLOW_vardef_in_functionDefinition234);
                    vardef14=vardef();

                    state._fsp--;

                    stream_vardef.add(vardef14.getTree());
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:49:21: ( ',' vardef )*
                    loop3:
                    do {
                        let alt3=2;
                        let LA3_0 = input.LA(1);

                        if ( (LA3_0==32) ) {
                            alt3=1;
                        }


                        switch (alt3) {
                    	case 1 :
                    	    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:49:22: ',' vardef
                    	    {
                    	    char_literal15=match(input,32,FOLLOW_32_in_functionDefinition237);  
                    	    stream_32.add(char_literal15);

                    	    pushFollow(FOLLOW_vardef_in_functionDefinition239);
                    	    vardef16=vardef();

                    	    state._fsp--;

                    	    stream_vardef.add(vardef16.getTree());

                    	    }
                    	    break;

                    	default :
                    	    break loop3;
                        }
                    } while (true);


                    }
                    break;

            }

            char_literal17=match(input,35,FOLLOW_35_in_functionDefinition246);  
            stream_35.add(char_literal17);

            currentScope = new LocalScope(fs);
            pushFollow(FOLLOW_slist_in_functionDefinition254);
            slist18=slist();

            state._fsp--;

            stream_slist.add(slist18.getTree());

            		fs.blockAST = (slist18!=null?(slist18.tree):null);
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
            let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

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
    // $ANTLR end "functionDefinition"

    // $ANTLR start "slist"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:60:1: slist : ( ':' NL ( statement )+ '.' NL -> ^( BLOCK ( statement )+ ) | statement -> ^( BLOCK statement ) );
     slist(): slist_return {
        let retval = new PieParser.slist_return();
        retval.start = input.LT(1);

        let root_0 = null;

        let char_literal19=null;
        let NL20=null;
        let char_literal22=null;
        let NL23=null;

        let statement21 = null;
        let statement24 = null;


        let char_literal19_tree=null;
        let NL20_tree=null;
        let char_literal22_tree=null;
        let NL23_tree=null;
        let stream_NL=new RewriteRuleTokenStream(adaptor,"token NL");
        let stream_36=new RewriteRuleTokenStream(adaptor,"token 36");
        let stream_DOT=new RewriteRuleTokenStream(adaptor,"token DOT");
        let stream_statement=new RewriteRuleSubtreeStream(adaptor,"rule statement");
        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:2: ( ':' NL ( statement )+ '.' NL -> ^( BLOCK ( statement )+ ) | statement -> ^( BLOCK statement ) )
            let alt6=2;
            let LA6_0 = input.LA(1);

            if ( (LA6_0==36) ) {
                alt6=1;
            }
            else if ( (LA6_0==IF||(LA6_0>=PRINT && LA6_0<=RETURN)||LA6_0==STRUCT||(LA6_0>=ID && LA6_0<=NL)) ) {
                alt6=2;
            }
            else {
                let nvae =
                    new NoViableAltException("", 6, 0, input);

                throw nvae;
            }
            switch (alt6) {
                case 1 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:4: ':' NL ( statement )+ '.' NL
                    {
                    char_literal19=match(input,36,FOLLOW_36_in_slist274);  
                    stream_36.add(char_literal19);

                    NL20=match(input,NL,FOLLOW_NL_in_slist276);  
                    stream_NL.add(NL20);

                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:11: ( statement )+
                    let cnt5=0;
                    loop5:
                    do {
                        let alt5=2;
                        let LA5_0 = input.LA(1);

                        if ( (LA5_0==IF||(LA5_0>=PRINT && LA5_0<=RETURN)||LA5_0==STRUCT||(LA5_0>=ID && LA5_0<=NL)) ) {
                            alt5=1;
                        }


                        switch (alt5) {
                    	case 1 :
                    	    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:11: statement
                    	    {
                    	    pushFollow(FOLLOW_statement_in_slist278);
                    	    statement21=statement();

                    	    state._fsp--;

                    	    stream_statement.add(statement21.getTree());

                    	    }
                    	    break;

                    	default :
                    	    if ( cnt5 >= 1 ) break loop5;
                                let eee =
                                    new EarlyExitException(5, input);
                                throw eee;
                        }
                        cnt5++;
                    } while (true);

                    char_literal22=match(input,DOT,FOLLOW_DOT_in_slist281);  
                    stream_DOT.add(char_literal22);

                    NL23=match(input,NL,FOLLOW_NL_in_slist283);  
                    stream_NL.add(NL23);



                    // AST REWRITE
                    // elements: statement
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    // wildcard labels: 
                    retval.tree = root_0;
                    let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

                    root_0 = adaptor.nil();
                    // 61:29: -> ^( BLOCK ( statement )+ )
                    {
                        // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:61:32: ^( BLOCK ( statement )+ )
                        {
                        let root_1 = adaptor.nil();
                        root_1 = adaptor.becomeRoot(adaptor.create(BLOCK, "BLOCK"), root_1);

                        if ( !(stream_statement.hasNext()) ) {
                            throw new RewriteEarlyExitException();
                        }
                        while ( stream_statement.hasNext() ) {
                            adaptor.addChild(root_1, stream_statement.nextTree());

                        }
                        stream_statement.reset();

                        adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;
                    }
                    break;
                case 2 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:62:4: statement
                    {
                    pushFollow(FOLLOW_statement_in_slist297);
                    statement24=statement();

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
                    let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

                    root_0 = adaptor.nil();
                    // 62:18: -> ^( BLOCK statement )
                    {
                        // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:62:21: ^( BLOCK statement )
                        {
                        let root_1 = adaptor.nil();
                        root_1 = adaptor.becomeRoot(adaptor.create(BLOCK, "BLOCK"), root_1);

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
    // $ANTLR end "slist"

    // $ANTLR start "statement"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:65:1: statement : ( structDefinition | qid '=' expr NL -> ^( '=' qid expr ) | 'return' expr NL -> ^( 'return' expr ) | 'print' expr NL -> ^( 'print' expr ) | 'if' expr c= slist ( 'else' el= slist )? -> ^( 'if' expr $c ( $el)? ) | 'while' expr slist -> ^( 'while' expr slist ) | call NL -> call | NL ->);
    statement(): statement_return  {
        let retval = new PieParser.statement_return();
        retval.start = input.LT(1);

        let root_0 = null;

        let char_literal27=null;
        let NL29=null;
        let string_literal30=null;
        let NL32=null;
        let string_literal33=null;
        let NL35=null;
        let string_literal36=null;
        let string_literal38=null;
        let string_literal39=null;
        let NL43=null;
        let NL44=null;
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

        let char_literal27_tree=null;
        let NL29_tree=null;
        let string_literal30_tree=null;
        let NL32_tree=null;
        let string_literal33_tree=null;
        let NL35_tree=null;
        let string_literal36_tree=null;
        let string_literal38_tree=null;
        let string_literal39_tree=null;
        let NL43_tree=null;
        let NL44_tree=null;

        let stream_NL=new RewriteRuleTokenStream(adaptor,"token NL");
        let stream_PRINT=new RewriteRuleTokenStream(adaptor,"token PRINT");
        let stream_37=new RewriteRuleTokenStream(adaptor,"token 37");
        let stream_RETURN=new RewriteRuleTokenStream(adaptor,"token RETURN");
        let stream_WHILE=new RewriteRuleTokenStream(adaptor,"token WHILE");
        let stream_IF=new RewriteRuleTokenStream(adaptor,"token IF");
        let stream_ASSIGN=new RewriteRuleTokenStream(adaptor,"token ASSIGN");
        let stream_qid=new RewriteRuleSubtreeStream(adaptor,"rule qid");
        let stream_call=new RewriteRuleSubtreeStream(adaptor,"rule call");
        let stream_expr=new RewriteRuleSubtreeStream(adaptor,"rule expr");
        let stream_slist=new RewriteRuleSubtreeStream(adaptor,"rule slist");
        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:66:2: ( structDefinition | qid '=' expr NL -> ^( '=' qid expr ) | 'return' expr NL -> ^( 'return' expr ) | 'print' expr NL -> ^( 'print' expr ) | 'if' expr c= slist ( 'else' el= slist )? -> ^( 'if' expr $c ( $el)? ) | 'while' expr slist -> ^( 'while' expr slist ) | call NL -> call | NL ->)
            let alt8=8;
            alt8 = dfa8.predict(input);
            switch (alt8) {
                case 1 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:66:4: structDefinition
                    {
                    root_0 = adaptor.nil();

                    pushFollow(FOLLOW_structDefinition_in_statement320);
                    structDefinition25=structDefinition();

                    state._fsp--;

                    adaptor.addChild(root_0, structDefinition25.getTree());

                    }
                    break;
                case 2 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:67:4: qid '=' expr NL
                    {
                    pushFollow(FOLLOW_qid_in_statement325);
                    qid26=qid();

                    state._fsp--;

                    stream_qid.add(qid26.getTree());
                    char_literal27=match(input,ASSIGN,FOLLOW_ASSIGN_in_statement327);  
                    stream_ASSIGN.add(char_literal27);

                    pushFollow(FOLLOW_expr_in_statement329);
                    expr28=expr();

                    state._fsp--;

                    stream_expr.add(expr28.getTree());
                    NL29=match(input,NL,FOLLOW_NL_in_statement331);  
                    stream_NL.add(NL29);



                    // AST REWRITE
                    // elements: ASSIGN, qid, expr
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    // wildcard labels: 
                    retval.tree = root_0;
                    let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

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
                case 3 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:68:4: 'return' expr NL
                    {
                    string_literal30=match(input,RETURN,FOLLOW_RETURN_in_statement349);  
                    stream_RETURN.add(string_literal30);

                    pushFollow(FOLLOW_expr_in_statement351);
                    expr31=expr();

                    state._fsp--;

                    stream_expr.add(expr31.getTree());
                    NL32=match(input,NL,FOLLOW_NL_in_statement353);  
                    stream_NL.add(NL32);



                    // AST REWRITE
                    // elements: expr, RETURN
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    // wildcard labels: 
                    retval.tree = root_0;
                    let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

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
                case 4 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:69:4: 'print' expr NL
                    {
                    string_literal33=match(input,PRINT,FOLLOW_PRINT_in_statement370);  
                    stream_PRINT.add(string_literal33);

                    pushFollow(FOLLOW_expr_in_statement372);
                    expr34=expr();

                    state._fsp--;

                    stream_expr.add(expr34.getTree());
                    NL35=match(input,NL,FOLLOW_NL_in_statement374);  
                    stream_NL.add(NL35);



                    // AST REWRITE
                    // elements: PRINT, expr
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    // wildcard labels: 
                    retval.tree = root_0;
                    let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

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
                case 5 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:70:4: 'if' expr c= slist ( 'else' el= slist )?
                    {
                    string_literal36=match(input,IF,FOLLOW_IF_in_statement391);  
                    stream_IF.add(string_literal36);

                    pushFollow(FOLLOW_expr_in_statement393);
                    expr37=expr();

                    state._fsp--;

                    stream_expr.add(expr37.getTree());
                    pushFollow(FOLLOW_slist_in_statement397);
                    c=slist();

                    state._fsp--;

                    stream_slist.add(c.getTree());
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:70:22: ( 'else' el= slist )?
                    let alt7=2;
                    let LA7_0 = input.LA(1);

                    if ( (LA7_0==37) ) {
                        alt7=1;
                    }
                    switch (alt7) {
                        case 1 :
                            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:70:23: 'else' el= slist
                            {
                            string_literal38=match(input,37,FOLLOW_37_in_statement400);  
                            stream_37.add(string_literal38);

                            pushFollow(FOLLOW_slist_in_statement404);
                            el=slist();

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
                    let stream_el=new RewriteRuleSubtreeStream(adaptor,"rule el",el!=null?el.tree:null);
                    let stream_c=new RewriteRuleSubtreeStream(adaptor,"rule c",c!=null?c.tree:null);
                    let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

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
                        if ( stream_el.hasNext() ) {
                            adaptor.addChild(root_1, stream_el.nextTree());

                        }
                        stream_el.reset();

                        adaptor.addChild(root_0, root_1);
                        }

                    }

                    retval.tree = root_0;
                    }
                    break;
                case 6 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:71:4: 'while' expr slist
                    {
                    string_literal39=match(input,WHILE,FOLLOW_WHILE_in_statement426);  
                    stream_WHILE.add(string_literal39);

                    pushFollow(FOLLOW_expr_in_statement428);
                    expr40=expr();

                    state._fsp--;

                    stream_expr.add(expr40.getTree());
                    pushFollow(FOLLOW_slist_in_statement430);
                    slist41=slist();

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
                    let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

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
                case 7 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:72:4: call NL
                    {
                    pushFollow(FOLLOW_call_in_statement447);
                    call42=call();

                    state._fsp--;

                    stream_call.add(call42.getTree());
                    NL43=match(input,NL,FOLLOW_NL_in_statement449);  
                    stream_NL.add(NL43);



                    // AST REWRITE
                    // elements: call
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    // wildcard labels: 
                    retval.tree = root_0;
                    let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

                    root_0 = adaptor.nil();
                    // 72:17: -> call
                    {
                        adaptor.addChild(root_0, stream_call.nextTree());

                    }

                    retval.tree = root_0;
                    }
                    break;
                case 8 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:73:4: NL
                    {
                    NL44=match(input,NL,FOLLOW_NL_in_statement463);  
                    stream_NL.add(NL44);



                    // AST REWRITE
                    // elements: 
                    // token labels: 
                    // rule labels: retval
                    // token list labels: 
                    // rule list labels: 
                    // wildcard labels: 
                    retval.tree = root_0;
                    let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

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
    // $ANTLR end "statement"

    // $ANTLR start "call"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:76:1: call : name= ID '(' ( expr ( ',' expr )* )? ')' -> ^( CALL ID ( expr )* ) ;
    call(): call_return {
        let retval = new PieParser.call_return();
        retval.start = input.LT(1);

        let root_0 = null;

        let name=null;
        let char_literal45=null;
        let char_literal47=null;
        let char_literal49=null;
        let expr46 = null;

        let expr48 = null;


        let name_tree=null;
        let char_literal45_tree=null;
        let char_literal47_tree=null;
        let char_literal49_tree=null;
        let stream_32=new RewriteRuleTokenStream(adaptor,"token 32");
        let stream_35=new RewriteRuleTokenStream(adaptor,"token 35");
        let stream_ID=new RewriteRuleTokenStream(adaptor,"token ID");
        let stream_34=new RewriteRuleTokenStream(adaptor,"token 34");
        let stream_expr=new RewriteRuleSubtreeStream(adaptor,"rule expr");
        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:2: (name= ID '(' ( expr ( ',' expr )* )? ')' -> ^( CALL ID ( expr )* ) )
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:4: name= ID '(' ( expr ( ',' expr )* )? ')'
            {
            name=match(input,ID,FOLLOW_ID_in_call489);  
            stream_ID.add(name);

            char_literal45=match(input,34,FOLLOW_34_in_call491);  
            stream_34.add(char_literal45);

            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:16: ( expr ( ',' expr )* )?
            let alt10=2;
            let LA10_0 = input.LA(1);

            if ( ((LA10_0>=NEW && LA10_0<=ID)||(LA10_0>=INT && LA10_0<=STRING)||LA10_0==34) ) {
                alt10=1;
            }
            switch (alt10) {
                case 1 :
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:17: expr ( ',' expr )*
                    {
                    pushFollow(FOLLOW_expr_in_call494);
                    expr46=expr();

                    state._fsp--;

                    stream_expr.add(expr46.getTree());
                    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:22: ( ',' expr )*
                    loop9:
                    do {
                        let alt9=2;
                        let LA9_0 = input.LA(1);

                        if ( (LA9_0==32) ) {
                            alt9=1;
                        }


                        switch (alt9) {
                    	case 1 :
                    	    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:23: ',' expr
                    	    {
                    	    char_literal47=match(input,32,FOLLOW_32_in_call497);  
                    	    stream_32.add(char_literal47);

                    	    pushFollow(FOLLOW_expr_in_call499);
                    	    expr48=expr();

                    	    state._fsp--;

                    	    stream_expr.add(expr48.getTree());

                    	    }
                    	    break;

                    	default :
                    	    break loop9;
                        }
                    } while (true);


                    }
                    break;

            }

            char_literal49=match(input,35,FOLLOW_35_in_call506);  
            stream_35.add(char_literal49);



            // AST REWRITE
            // elements: expr, ID
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            // wildcard labels: 
            retval.tree = root_0;
            let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

            root_0 = adaptor.nil();
            // 81:41: -> ^( CALL ID ( expr )* )
            {
                // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:44: ^( CALL ID ( expr )* )
                {
                let root_1 = adaptor.nil();
                root_1 = adaptor.becomeRoot(adaptor.create(CALL, "CALL"), root_1);

                adaptor.addChild(root_1, stream_ID.nextNode());
                // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:81:54: ( expr )*
                while ( stream_expr.hasNext() ) {
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


            	(retval.tree).scope = currentScope;
            	//(retval.tree).symbol = currentScope.resolve((name!=null?name.getText():null));

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
    // $ANTLR end "call"

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


    // $ANTLR start "addexpr"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:85:1: addexpr : mulexpr ( ( '+' | '-' ) mulexpr )* ;
    addexpr() : addexpr_return {
        let  retval = new addexpr_return ();
        retval.start = input.LT(1);

        let root_0 = null;

        let set54=null;

        let mulexpr53 = null;
        let mulexpr55 = null;

        let set54_tree=null;

        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:86:2: ( mulexpr ( ( '+' | '-' ) mulexpr )* )
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:86:4: mulexpr ( ( '+' | '-' ) mulexpr )*
            {
            root_0 = adaptor.nil();

            pushFollow(FOLLOW_mulexpr_in_addexpr547);
            mulexpr53=mulexpr();

            state._fsp--;

            adaptor.addChild(root_0, mulexpr53.getTree());
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:86:12: ( ( '+' | '-' ) mulexpr )*
            loop12:
            do {
                let alt12=2;
                let LA12_0 = input.LA(1);

                if ( ((LA12_0>=ADD && LA12_0<=SUB)) ) {
                    alt12=1;
                }


                switch (alt12) {
            	case 1 :
            	    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:86:13: ( '+' | '-' ) mulexpr
            	    {
            	    set54=input.LT(1);
            	    set54=input.LT(1);
            	    if ( (input.LA(1)>=ADD && input.LA(1)<=SUB) ) {
            	        input.consume();
            	        root_0 = adaptor.becomeRoot(adaptor.create(set54), root_0);
            	        state.errorRecovery=false;
            	    }
            	    else {
            	        let mse = new MismatchedSetException(null,input);
            	        throw mse;
            	    }

            	    pushFollow(FOLLOW_mulexpr_in_addexpr557);
            	    mulexpr55=mulexpr();

            	    state._fsp--;

            	    adaptor.addChild(root_0, mulexpr55.getTree());

            	    }
            	    break;

            	default :
            	    break loop12;
                }
            } while (true);


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
    // $ANTLR end "addexpr"


    // $ANTLR start "mulexpr"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:89:1: mulexpr : atom ( '*' atom )* ;
    mulexpr() : mulexpr_return {
        let retval = new mulexpr_return();
        retval.start = input.LT(1);

        let root_0 = null;

        let char_literal57=null;

        let atom56 = null;
        let atom58 = null;

        let char_literal57_tree=null;

        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:90:2: ( atom ( '*' atom )* )
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:90:4: atom ( '*' atom )*
            {
            root_0 = adaptor.nil();

            pushFollow(FOLLOW_atom_in_mulexpr571);
            atom56=atom();

            state._fsp--;

            adaptor.addChild(root_0, atom56.getTree());
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:90:9: ( '*' atom )*
            loop13:
            do {
                let alt13=2;
                let LA13_0 = input.LA(1);

                if ( (LA13_0==MUL) ) {
                    alt13=1;
                }


                switch (alt13) {
            	case 1 :
            	    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:90:10: '*' atom
            	    {
            	    char_literal57=match(input,MUL,FOLLOW_MUL_in_mulexpr574); 
            	    char_literal57_tree = adaptor.create(char_literal57);
            	    root_0 = adaptor.becomeRoot(char_literal57_tree, root_0);

            	    pushFollow(FOLLOW_atom_in_mulexpr577);
            	    atom58=atom();

            	    state._fsp--;

            	    adaptor.addChild(root_0, atom58.getTree());

            	    }
            	    break;

            	default :
            	    break loop13;
                }
            } while (true);


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
    // $ANTLR end "mulexpr"

    // $ANTLR start "atom"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:93:1: atom : ( INT | CHAR | FLOAT | STRING | qid | call | instance | '(' expr ')' -> expr );
    public final let atom() throws RecognitionException {
        let retval = new PieParser.atom_return();
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


    // $ANTLR start "instance"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:104:1: instance : 'new' sname= ID -> ^( 'new' ID ) ;
    instance() : instance_return {
        let retval = new PieParser.instance_return();
        retval.start = input.LT(1);

        let root_0 = null;

        let sname=null;
        let string_literal69=null;

        let sname_tree=null;
        let string_literal69_tree=null;
        let stream_NEW=new RewriteRuleTokenStream(adaptor,"token NEW");
        let stream_ID=new RewriteRuleTokenStream(adaptor,"token ID");

        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:109:2: ( 'new' sname= ID -> ^( 'new' ID ) )
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:109:4: 'new' sname= ID
            {
            string_literal69=match(input,NEW,FOLLOW_NEW_in_instance677);  
            stream_NEW.add(string_literal69);

            sname=match(input,ID,FOLLOW_ID_in_instance681);  
            stream_ID.add(sname);



            // AST REWRITE
            // elements: ID, NEW
            // token labels: 
            // rule labels: retval
            // token list labels: 
            // rule list labels: 
            // wildcard labels: 
            retval.tree = root_0;
            let stream_retval=new RewriteRuleSubtreeStream(adaptor,"rule retval",retval!=null?retval.tree:null);

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


            	let nameNode = (retval.tree).getChild(0);
            	nameNode.scope = currentScope;

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
    // $ANTLR end "instance"

    // $ANTLR start "qid"
    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:1: qid : ID ( '.' ID )* ;
    qid() : qid_return {
        let retval = new qid_return();
        retval.start = input.LT(1);

        let root_0 = null;

        let ID70=null;
        let char_literal71=null;
        let ID72=null;

        let ID70_tree=null;
        let char_literal71_tree=null;
        let ID72_tree=null;

        try {
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:5: ( ID ( '.' ID )* )
            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:7: ID ( '.' ID )*
            {
            root_0 = adaptor.nil();

            ID70=match(input,ID,FOLLOW_ID_in_qid701); 
            ID70_tree = adaptor.create(ID70);
            adaptor.addChild(root_0, ID70_tree);

            // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:10: ( '.' ID )*
            loop15:
            do {
                let alt15=2;
                let LA15_0 = input.LA(1);

                if ( (LA15_0==DOT) ) {
                    alt15=1;
                }


                switch (alt15) {
            	case 1 :
            	    // /Users/parrt/research/book/TPDSL/Book/code/interp/tree/Pie.g:113:11: '.' ID
            	    {
            	    char_literal71=match(input,DOT,FOLLOW_DOT_in_qid704); 
            	    char_literal71_tree = adaptor.create(char_literal71);
            	    root_0 = adaptor.becomeRoot(char_literal71_tree, root_0);

            	    ID72=match(input,ID,FOLLOW_ID_in_qid707); 
            	    ID72_tree = adaptor.create(ID72);
            	    adaptor.addChild(root_0, ID72_tree);


            	    }
            	    break;

            	default :
            	    break loop15;
                }
            } while (true);


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
    // $ANTLR end "qid"

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

    // Delegated rules


    protected DFA8 dfa8 = new DFA8(this);
    protected DFA14 dfa14 = new DFA14(this);
    static final string DFA8_eotS =
        "\12\uffff";
    static final string DFA8_eofS =
        "\12\uffff";
    static final string DFA8_minS =
        "\1\10\1\uffff\1\11\7\uffff";
    static final string DFA8_maxS =
        "\1\27\1\uffff\1\42\7\uffff";
    static final string DFA8_acceptS =
        "\1\uffff\1\1\1\uffff\1\3\1\4\1\5\1\6\1\10\1\7\1\2";
    static final string DFA8_specialS =
        "\12\uffff}>";
    static final string[] DFA8_transitionS = {
            "\1\5\1\uffff\1\4\1\6\1\3\6\uffff\1\1\2\uffff\1\2\1\7",
            "",
            "\1\11\12\uffff\1\11\15\uffff\1\10",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    };

    static final short[] DFA8_eot = DFA.unpackEncodedstring(DFA8_eotS);
    static final short[] DFA8_eof = DFA.unpackEncodedstring(DFA8_eofS);
    static final char[] DFA8_min = DFA.unpackEncodedstringToUnsignedChars(DFA8_minS);
    static final char[] DFA8_max = DFA.unpackEncodedstringToUnsignedChars(DFA8_maxS);
    static final short[] DFA8_accept = DFA.unpackEncodedstring(DFA8_acceptS);
    static final short[] DFA8_special = DFA.unpackEncodedstring(DFA8_specialS);
    static final short[][] DFA8_transition;

    static {
        let numStates = DFA8_transitionS.length;
        DFA8_transition = new short[numStates][];
        for (let i=0; i<numStates; i++) {
            DFA8_transition[i] = DFA.unpackEncodedstring(DFA8_transitionS[i]);
        }
    }

    class DFA8 extends DFA {

        public DFA8(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 8;
            this.eot = DFA8_eot;
            this.eof = DFA8_eof;
            this.min = DFA8_min;
            this.max = DFA8_max;
            this.accept = DFA8_accept;
            this.special = DFA8_special;
            this.transition = DFA8_transition;
        }
        public string getDescription() {
            return "65:1: statement : ( structDefinition | qid '=' expr NL -> ^( '=' qid expr ) | 'return' expr NL -> ^( 'return' expr ) | 'print' expr NL -> ^( 'print' expr ) | 'if' expr c= slist ( 'else' el= slist )? -> ^( 'if' expr $c ( $el)? ) | 'while' expr slist -> ^( 'while' expr slist ) | call NL -> call | NL ->);";
        }
    }
    static final string DFA14_eotS =
        "\12\uffff";
    static final string DFA14_eofS =
        "\12\uffff";
    static final string DFA14_minS =
        "\1\25\4\uffff\1\10\4\uffff";
    static final string DFA14_maxS =
        "\1\42\4\uffff\1\44\4\uffff";
    static final string DFA14_acceptS =
        "\1\uffff\1\1\1\2\1\3\1\4\1\uffff\1\7\1\10\1\6\1\5";
    static final string DFA14_specialS =
        "\12\uffff}>";
    static final string[] DFA14_transitionS = {
            "\1\6\1\5\1\uffff\1\1\1\2\1\3\1\4\6\uffff\1\7",
            "",
            "",
            "",
            "",
            "\1\11\1\uffff\3\11\1\uffff\7\11\1\uffff\2\11\10\uffff\1\11"+
            "\1\uffff\1\10\2\11",
            "",
            "",
            "",
            ""
    };

    static final short[] DFA14_eot = DFA.unpackEncodedstring(DFA14_eotS);
    static final short[] DFA14_eof = DFA.unpackEncodedstring(DFA14_eofS);
    static final char[] DFA14_min = DFA.unpackEncodedstringToUnsignedChars(DFA14_minS);
    static final char[] DFA14_max = DFA.unpackEncodedstringToUnsignedChars(DFA14_maxS);
    static final short[] DFA14_accept = DFA.unpackEncodedstring(DFA14_acceptS);
    static final short[] DFA14_special = DFA.unpackEncodedstring(DFA14_specialS);
    static final short[][] DFA14_transition;

    static {
        let numStates = DFA14_transitionS.length;
        DFA14_transition = new short[numStates][];
        for (let i=0; i<numStates; i++) {
            DFA14_transition[i] = DFA.unpackEncodedstring(DFA14_transitionS[i]);
        }
    }

    class DFA14 extends DFA {

        public DFA14(BaseRecognizer recognizer) {
            this.recognizer = recognizer;
            this.decisionNumber = 14;
            this.eot = DFA14_eot;
            this.eof = DFA14_eof;
            this.min = DFA14_min;
            this.max = DFA14_max;
            this.accept = DFA14_accept;
            this.special = DFA14_special;
            this.transition = DFA14_transition;
        }
        public string getDescription() {
            return "93:1: atom : ( INT | CHAR | FLOAT | STRING | qid | call | instance | '(' expr ')' -> expr );";
        }
    }
 


}