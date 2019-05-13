import { Token } from './Token'
import { ReturnValue } from './ReturnValue'
import { GlobalScope } from './GlobalScope';
import { MemorySpace } from './MemorySpace';
import { FunctionSpace } from './FunctionSpace';
import { PieAST } from './PieAST';
import { InterpreterListener, IOpts } from './InterpreterListener'

class PieInterpreterListener implements InterpreterListener {
    public info(msg: string) { console.log(msg); }
    public error(msg: string, {e, t}: IOpts) {
        this.info("line "+t.getLine()+": "+msg);
    }
};

export class Interpreter {
    listener: any = new PieInterpreterListener()// default response to messages

    public static sharedReturnValue: ReturnValue = new ReturnValue();

    globalScope?: GlobalScope;   // global scope is filled by the parser
    globals: MemorySpace = new MemorySpace("globals");       // global memory
    currentSpace: MemorySpace = this.globals;
    stack: Stack<FunctionSpace> = new Stack<FunctionSpace>();// call stack
    root: PieAST ;               // the AST represents our code memory
    tokens: TokenRewriteStream;
    lex: PieLexer;              // lexer/parser are part of the processor
    parser: PieParser;

    interp(input: InputStream) {
        this.globalScope = new GlobalScope();
        this.lex = new PieLexer(new ANTLRInputStream(input));
        this.tokens = new TokenRewriteStream(lex);
        this.parser = new PieParser(tokens, this);
        this.parser.setTreeAdaptor(InterPie.pieAdaptor);

        let r = parser.program();
        if ( parser.getNumberOfSyntaxErrors()==0 ) {
            root = r.getTree();
            //System.out.println("tree: "+root.toStringTree());
            block(root);
        }
    }

    /** visitor dispatch according to node token type */
    exec(t: PieAST): any {
        try {
            switch ( t.getType() ) {
                case PieParser.BLOCK : block(t); break;
                case PieParser.ASSIGN : assign(t); break;
                case PieParser.RETURN : ret(t); break;
                case PieParser.PRINT : print(t); break;
                case PieParser.IF : ifstat(t); break;
                case PieParser.WHILE : whileloop(t); break;
                case PieParser.CALL : return call(t);
                case PieParser.NEW : return instance(t);
                case PieParser.ADD : return add(t);
                case PieParser.SUB : return op(t);
                case PieParser.MUL : return op(t);
                case PieParser.EQ : return eq(t);
                case PieParser.LT : return lt(t);
                case PieParser.INT : return Integer.parseInt(t.getText());
                case PieParser.CHAR : return new Character(t.getText().charAt(1));
                case PieParser.FLOAT : return Float.parseFloat(t.getText());
                case PieParser.STRING :
                    String s = t.getText();
                    return s.substring(1,s.length()-1);
                case PieParser.DOT :
                case PieParser.ID :
                    return load(t);
                default : // catch unhandled node types
                    throw new UnsupportedOperationException("Node "+
                        t.getText()+"<"+t.getType()+"> not handled");
            }
        }
        catch (Exception e) {
            listener.error("problem executing "+t.toStringTree(), e);
        }
        return null;
    }

    block(t: PieAST) {
        if ( t.getType()!=PieParser.BLOCK ) {
            listener.error("not a block: "+t.toStringTree());
        }
        const stats = t.getChildren();
        for (let x of stats) {
            this.exec(x) 
        };
    }

    call(t: PieAST): any {
        // Resolve function's name
        let fname = t.getChild(0).getText();
        let fs = t.scope.resolve(fname);
        if ( fs==null ) {
            this.listener.error("no such function "+fname, t.token);
            return null;
        }
        let fspace = new FunctionSpace(fs);
        let saveSpace = this.currentSpace;
        this.currentSpace = fspace;

        let argCount = t.getChildCount()-1;
        // check for argument compatibility
        if ( fs.formalArgs==null && argCount>0 || // args compatible?
             fs.formalArgs!=null && fs.formalArgs.size()!=argCount ) {
            this.listener.error("function "+fs.name+" argument list mismatch");
            return null;
        }
        let i = 0; // define args according to order in formalArgs
        for (let argS of fs.formalArgs.values()) {
            let arg = argS;
            let ithArg = t.getChild(i+1);
            let argValue = this.exec(ithArg);
            fspace[arg.name] = argValue;
            i++;
        }
        Object result = null;
        stack.push(fspace);        // PUSH new arg, local scope
        try { exec(fs.blockAST); } // do the call
        catch (ReturnValue rv) { result = rv.value; } // trap return value
        stack.pop();               // POP arg, locals
        currentSpace = saveSpace;
        return result;
    }

    ret(t: PieAST) {
        Interpreter.sharedReturnValue.value = this.exec(t.getChild(0));
        throw Interpreter.sharedReturnValue;
    }

    print(t: PieAST ) {
        const expr = t.getChild(0);
        this.println( this.exec(expr) );
    }

    assign(t: PieAST) {
        const  lhs = t.getChild(0);   // get operands
        const  expr = t.getChild(1);
        const value = this.exec(expr);            // walk/evaluate expr
        if ( lhs.getType()==PieParser.DOT ) {
            fieldassign(lhs, value); // field ^('=' ^('.' a x) expr)
            return;
        }
        // var assign ^('=' a expr)
        MemorySpace space = getSpaceWithSymbol(lhs.getText());
        if ( space==null ) space = currentSpace; // create in current space
        space.put(lhs.getText(), value);         // store
    }

    fieldassign(lhs: PieAST , value: any) {
        const o =  lhs.getChild(0);
        const f =  lhs.getChild(1);
        const fieldname = f.getText();
        const a = this.load(o);
        if ( !(a instanceof StructInstance) ) {
            // make a good error message:
            constleftpart = parser.input.toString(lhs.getTokenStartIndex(),
                                                    lhs.getTokenStopIndex()-2);
                                                    constall = parser.input.toString(lhs.getTokenStartIndex(),
                                               lhs.getTokenStopIndex());
            this.listener.error(leftpart+" is not a struct in "+all, o.token);
            return;
        }
        const struct = a;
        if ( struct.def.resolveMember(fieldname) == null ) {
            this.listener.error("can't assign; "+struct.name+" has no "+fieldname+
                           " field", f.token);
            return;
        }
        struct.put(fieldname, value);
    }

    whileloop(t: PieAST) {
        const condStart = t.getChild(0);
        const codeStart = t.getChild(1);
        let c = this.exec(condStart);
        while ( c ) {
            this.exec(codeStart);
            c = this.exec(condStart);
        }
    }

    ifstat(t: PieAST) {
        const condStart = t.getChild(0);
        const codeStart = t.getChild(1);
        let elseCodeStart = null;
        if ( t.getChildCount()==3 ) elseCodeStart = t.getChild(2);
        let c = this.exec(condStart);
        if ( c.booleanValue() ) {
            this.exec(codeStart);
        }
        else if ( elseCodeStart!=null ) {
            this.exec(elseCodeStart);
        }
    }

    eq(t: PieAST ): boolean  {
        const a = this.exec( t.getChild(0) );
        const b = this.exec( t.getChild(1) );
        return a === b;
    }

    lt(t: PieAST): boolean {
        const a = this.exec( t.getChild(0) );
        const b = this.exec( t.getChild(1) );
        if ( a instanceof Number && b instanceof Number ) {
            Number x = a;
            Number y = b;
            return x.floatValue() < y.floatValue();
        }
        return false;
    }

    op(t: PieAST): any {
        const a = this.exec( t.getChild(0) );
        const b = this.exec( t.getChild(1) );
        if ( a instanceof Float || b instanceof Float ) {
            const x = a.floatValue();
            const y = b.floatValue();
            switch (t.getType()) {
                case PieParser.ADD : return x + y;
                case PieParser.SUB : return x - y;
                case PieParser.MUL : return x * y;
            }
        }
        if ( a instanceof Integer || b instanceof Integer ) {
            let x = a.intValue();
            let y = b.intValue();
            switch (t.getType()) {
                case PieParser.ADD : return x + y;
                case PieParser.SUB : return x - y;
                case PieParser.MUL : return x * y;
            }
        }
        return 0;
    }

    public add(t: PieAST): any {
        const a = this.exec( t.getChild(0) );
        const b = this.exec( t.getChild(1) );
        if ( a instanceof String || b instanceof String ) {
            return a.toString() + b.toString();
        }
        return op(t);
    }

    public load(t: PieAST): any {
        if ( t.getType()==PieParser.DOT ) return fieldload(t);
        const s = getSpaceWithSymbol(t.getText()); // just a not a.b
        if ( s!=null ) return s.get(t.getText());
        this.listener.error("no such variable "+t.getText(), t.token);
        return null;
    }

    fieldload(t: PieAST): any { // E.g., a.b in tree ^('.' a b)
        const expr = t.getChild(0); // get left node or subtree
        const b = t.getChild(1);    // must be an ID node
        const id = b.getText();
        const struct = this.load(expr); // find expr
        if ( struct.def.resolveMember(id)==null ) { // is it a struct?
            this.listener.error(struct.name+" has no "+id+" field", b.token);
            return null;
        }
        return struct.get(id);
    }

    /** Return scope holding id's value; current func space or global. */
    getSpaceWithSymbol(id: string): MemorySpace  {
        if (stack.size()>0 && stack.peek().get(id)!=null) { // in top stack?
            return stack.peek();
        }
        if ( globals.get(id)!=null ) return globals;        // in globals?
        return null;                                        // nowhere
    }

    instance(t: PieAST): StructInstance {
        const structNameNode = t.getChild(0);
        const s = structNameNode.scope.resolve(structNameNode.getText());
        return new StructInstance(s);
    }
}
