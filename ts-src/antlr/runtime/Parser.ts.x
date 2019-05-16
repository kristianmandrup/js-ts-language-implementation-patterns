import { TokenStream } from './TokenStream';
abstract class Parser {

  constructor(input: TokenStream) : Recognizer<Token, ParserATNSimulator>() {

  }

  assignInputStream(newValue?: numberStream) {
      this.inputStream = newValue
  }

  readInputStream(): numberStream | undefined {
      return this.inputStream
  }

  /**
   * The error handling strategy for the parser. The default value is a new
   * instance of [DefaultErrorStrategy].
   *
   * @see .getErrorHandler
   *
   * @see .setErrorHandler
   */

  errorHandler: ANTLRErrorStrategy = DefaultErrorStrategy()
  //
//    /**
//     * The input stream.
//     *
//     * @see .getInputStream
//     *
//     * @see .setInputStream
//     */
  _input?: TokenStream = input
  //
  _precedenceStack: numberegerStack = IntegerStack()
  //
//    /**
//     * The [ParserRuleContext] object for the currently executing rule.
//     * This is always non-null during the parsing process.
//     */
  context: ParserRuleContext = null
  //
//    /**
//     * Specifies whether or not the parser should construct a parse tree during
//     * the parsing process. The default value is `true`.
//     *
//     * @see .getBuildParseTree
//     *
//     * @see .setBuildParseTree
//     */
//    /**
//     * Gets whether or not a complete parse tree will be constructed while
//     * parsing. This property is `true` for a newly constructed parser.
//     *
//     * @return `true` if a complete parse tree will be constructed while
//     * parsing, otherwise `false`
//     */
//    /**
//     * Track the [ParserRuleContext] objects during the parse and hook
//     * them up using the [ParserRuleContext.children] list so that it
//     * forms a parse tree. The [ParserRuleContext] returned from the start
//     * rule represents the root of the parse tree.
//     *
//     *
//     * Note that if we are not building parse trees, rule contexts only point
//     * upwards. When a rule exits, it returns the context but that gets garbage
//     * collected if nobody holds a reference. It points upwards but nobody
//     * points at it.
//     *
//     *
//     * When we build parse trees, we are adding all of these contexts to
//     * [ParserRuleContext.children] list. Contexts are then not candidates
//     * for garbage collection.
//     */
  buildParseTree = true
  //
//
//    /**
//     * When [.setTrace]`(true)` is called, a reference to the
//     * [TraceListener] is stored here so it can be easily removed in a
//     * later call to [.setTrace]`(false)`. The listener itself is
//     * implemented as a parser listener so this field is not directly used by
//     * other parser methods.
//     */
//    private var _tracer: TraceListener? = null
//
//    /**
//     * The list of [ParseTreeListener] listeners registered to receive
//     * events during the parse.
//     *
//     * @see .addParseListener
//     */
  _parseListeners: ParseTreeListener[] = []
  //
//    /**
//     * The number of syntax errors reported during parsing. This value is
//     * incremented each time [.notifyErrorListeners] is called.
//     */
//    /**
//     * Gets the number of syntax errors reported during parsing. This value is
//     * incremented each time [.notifyErrorListeners] is called.
//     *
//     * @see .notifyErrorListeners
//     */
  numberOfSyntaxErrors: number = 0
//
  /** Indicates parser has match()ed EOF token. See [.exitRule].  */
  var isMatchedEOF: boolean = false
  //
//    /**
//     * @return `true` if the [ParserRuleContext.children] list is trimmed
//     * using the default [Parser.TrimToSizeListener] during the parse process.
//     */
//    /**
//     * Trim the internal lists of the parse tree during parsing to conserve memory.
//     * This property is set to `false` by default for a newly constructed parser.
//     *
//     * @param trimParseTrees `true` to trim the capacity of the [ParserRuleContext.children]
//     * list to its size after a rule is parsed.
//     */
//    var trimParseTree: boolean
//        get() = parseListeners.contains(TrimToSizeListener.INSTANCE)
//        set(trimParseTrees) {
//            if (trimParseTrees) {
//                if (trimParseTree) return
//                addParseListener(TrimToSizeListener.INSTANCE)
//            } else {
//                removeParseListener(TrimToSizeListener.INSTANCE)
//            }
//        }
//
//
  parseListeners: ParseTreeListener[]
      get() = _parseListeners

  /** Tell our token source and error strategy about a new way to create tokens.  */
  tokenFactory: TokenFactory<*>
      get() = _input!!.tokenSource!!.tokenFactory
      set(factory) {
          _input!!.tokenSource!!.tokenFactory = factory
      }
//
//    /**
//     * The ATN with bypass alternatives is expensive to create so we create it
//     * lazily.
//     *
//     * @throws UnsupportedOperationException if the current parser does not
//     * implement the [.getSerializedATN] method.
//     */
//
//    atnWithBypassAlts: ATN
//        get() {
//            serializedAtn = serializedATN ?: throw UnsupportedOperationException("The current parser does not support an ATN with bypass alternatives.")
//
//            synchronized(bypassAltsAtnCache) {
//                var result: ATN? = bypassAltsAtnCache[serializedAtn]
//                if (result == null) {
//                    deserializationOptions = ATNDeserializationOptions()
//                    deserializationOptions.setGenerateRuleBypassTransitions(true)
//                    result = ATNDeserializer(deserializationOptions).deserialize(serializedAtn!!.toCharArray())
//                    bypassAltsAtnCache.put(serializedAtn, result)
//                }
//
//                return result
//            }
//        }
//
//    override var inputStream: TokenStream?
//        get() = tokenStream
//        set

  /** Set the token stream and reset the parser.  */
  tokenStream: TokenStream?
      get() = _input
      set(input) {
          this._input = null
          reset()
          this._input = input
      }
  //
//    /** Match needs to return the current input symbol, which gets put
//     * into the accessLabel for the associated token ref; e.g., x=ID.
//     */
//
  currentToken: Token?
      get() = _input!!.LT(1)

  /**
   * Get the precedence level for the top-most precedence rule.
   *
   * @return The precedence level for the top-most precedence rule, or -1 if
   * the parser context is not nested within a precedence rule.
   */
  precedence: number
      get() = if (_precedenceStack.isEmpty) {
          -1
      } else _precedenceStack.peek()
  //
//    /**
//     * Computes the set of input symbols which could follow the current parser
//     * state and context, as given by [.getState] and [.getContext],
//     * respectively.
//     *
//     * @see ATN.getExpectedTokens
//     */
  expectedTokens: IntervalSet
      get() = atn.getExpectedTokens(state, context)
  //
//
//    expectedTokensWithinCurrentRule: numberervalSet
//        get() {
//            atn = interpreter.atn
//            s = atn.states.get(state)
//            return atn.nextTokens(s)
//        }
//
//    /** Return List&lt;String&gt; of the rule names in your parser instance
//     * leading up to a call to the current rule.  You could override if
//     * you want more details such as the file/line info of where
//     * in the ATN a rule is invoked.
//     *
//     * This is very useful for error messages.
//     */
  ruleInvocationStack: string[]
      get() = getRuleInvocationStack(context)

  /** For debugging and other purposes.  */
  dfaStrings: string[]
      get() = synchronized(interpreter!!.decisionToDFA) {
          s = []
          for (d in 0 until interpreter!!.decisionToDFA.size) {
              dfa = interpreter!!.decisionToDFA[d]
              s.add(dfa.toString(vocabulary)!!)
          }
          return s
      }

  sourceName: string
      get() = _input!!.sourceName!!

  parseInfo?: ParseInfo
      get() {
          interp = interpreter
          return if (interp is ProfilingATNSimulator) {
              ParseInfo(interp as ProfilingATNSimulator)
          } else null
      }

  //
//    /**
//     * Gets whether a [TraceListener] is registered as a parse listener
//     * for the parser.
//     *
//     * @see .setTrace
//     */
//    /** During a parse is sometimes useful to listen in on the rule entry and exit
//     * events as well as token matches. This is for quick and dirty debugging.
//     */
//    var isTrace: boolean
//        get() = _tracer != null
//        set(trace) = if (!trace) {
//            removeParseListener(_tracer)
//            _tracer = null
//        } else {
//            if (_tracer != null)
//                removeParseListener(_tracer)
//            else
//                _tracer = TraceListener()
//            addParseListener(_tracer)
//        }
//
//    inner class TraceListener : ParseTreeListener {
//        enterEveryRule(ctx: ParserRuleContext) {
//            println("enter   " + ruleNames!![ctx.ruleIndex] +
//                    ", LT(1)=" + _input!!.LT(1).text)
//        }
//
//        visitTerminal(node: TerminalNode) {
//            System.out.println("consume " + node.getSymbol() + " rule " +
//                    ruleNames!![context!!.ruleIndex])
//        }
//
//        visitErrorNode(node: ErrorNode) {}
//
//        exitEveryRule(ctx: ParserRuleContext) {
//            println("exit    " + ruleNames!![ctx.ruleIndex] +
//                    ", LT(1)=" + _input!!.LT(1).text)
//        }
//    }
//
//    class TrimToSizeListener : ParseTreeListener {
//
//        enterEveryRule(ctx: ParserRuleContext) {}
//
//        visitTerminal(node: TerminalNode) {}
//
//        visitErrorNode(node: ErrorNode) {}
//
//        exitEveryRule(ctx: ParserRuleContext) {
//            if (ctx.children is ArrayList<*>) {
//                (ctx.children as ArrayList<*>).trimToSize()
//            }
//        }
//
//        companion object {
//            INSTANCE = TrimToSizeListener()
//        }
//    }
//
//    init {
//        _precedenceStack = IntegerStack()
//        _precedenceStack.push(0)
//    }
//
  init {
      assignInputStream(input)
  }
//
  /** reset the parser's state  */
  reset() {
      TODO()
//        if (inputStream != null) inputStream!!.seek(0)
//        errorHandler.reset(this)
//        context = null
//        numberOfSyntaxErrors = 0
//        isMatchedEOF = false
//        isTrace = false
//        _precedenceStack.clear()
//        _precedenceStack.push(0)
//        interpreter = interpreter
//        if (interpreter != null) {
//            interpreter!!.reset()
//        }
  }

  /**
   * Match current input symbol against `ttype`. If the symbol type
   * matches, [ANTLRErrorStrategy.reportMatch] and [.consume] are
   * called to complete the match process.
   *
   *
   * If the symbol type does not match,
   * [ANTLRErrorStrategy.recoverInline] is called on the current error
   * strategy to attempt recovery. If [.getBuildParseTree] is
   * `true` and the token index of the symbol returned by
   * [ANTLRErrorStrategy.recoverInline] is -1, the symbol is added to
   * the parse tree by calling [.createErrorNode] then
   * [ParserRuleContext.addErrorNode].
   *
   * @param ttype the token type to match
   * @return the matched symbol
   * @throws RecognitionException if the current input symbol did not match
   * `ttype` and the error strategy could not recover from the
   * mismatched symbol
   */
  match(ttype: number): Token {
      var t = currentToken
      if (t!!.type == ttype) {
          if (ttype == Token.EOF) {
              isMatchedEOF = true
          }
          errorHandler.reportMatch(this)
          consume()
      } else {
          t = errorHandler.recoverInline(this)
          if (buildParseTree && t.tokenIndex == -1) {
              // we must have conjured up a new token during single token insertion
              // if it's not the current symbol
              context!!.addErrorNode(createErrorNode(context, t))
          }
      }
      return t
  }

  /**
   * Match current input symbol as a wildcard. If the symbol type matches
   * (i.e. has a value greater than 0), [ANTLRErrorStrategy.reportMatch]
   * and [.consume] are called to complete the match process.
   *
   *
   * If the symbol type does not match,
   * [ANTLRErrorStrategy.recoverInline] is called on the current error
   * strategy to attempt recovery. If [.getBuildParseTree] is
   * `true` and the token index of the symbol returned by
   * [ANTLRErrorStrategy.recoverInline] is -1, the symbol is added to
   * the parse tree by calling [Parser.createErrorNode]. then
   * [ParserRuleContext.addErrorNode]
   *
   * @return the matched symbol
   * @throws RecognitionException if the current input symbol did not match
   * a wildcard and the error strategy could not recover from the mismatched
   * symbol
   */
  matchWildcard(): Token {
      var t = currentToken
      if (t!!.type > 0) {
          errorHandler.reportMatch(this)
          consume()
      } else {
          t = errorHandler.recoverInline(this)
          if (buildParseTree && t.tokenIndex == -1) {
              // we must have conjured up a new token during single token insertion
              // if it's not the current symbol
              context!!.addErrorNode(createErrorNode(context, t))
          }
      }

      return t
  }

  /**
   * Registers `listener` to receive events during the parsing process.
   *
   *
   * To support output-preserving grammar transformations (including but not
   * limited to left-recursion removal, automated left-factoring, and
   * optimized code generation), calls to listener methods during the parse
   * may differ substantially from calls made by
   * [ParseTreeWalker.DEFAULT] used after the parse is complete. In
   * particular, rule entry and exit events may occur in a different order
   * during the parse than after the parser. In addition, calls to certain
   * rule entry methods may be omitted.
   *
   *
   * With the following specific exceptions, calls to listener events are
   * *deterministic*, i.e. for identical input the calls to listener
   * methods will be the same.
   *
   *
   *  * Alterations to the grammar used to generate code may change the
   * behavior of the listener calls.
   *  * Alterations to the command line options passed to ANTLR 4 when
   * generating the parser may change the behavior of the listener calls.
   *  * Changing the version of the ANTLR Tool used to generate the parser
   * may change the behavior of the listener calls.
   *
   *
   * @param listener the listener to add
   *
   */
  addParseListener(listener: ParseTreeListener) {
      _parseListeners.add(listener)
  }

  /**
   * Remove `listener` from the list of parse listeners.
   *
   *
   * If `listener` is `null` or has not been added as a parse
   * listener, this method does nothing.
   *
   * @see .addParseListener
   *
   *
   * @param listener the listener to remove
   */
  removeParseListener(listener: ParseTreeListener) {
      _parseListeners.remove(listener)
  }

  /**
   * Remove all parse listeners.
   *
   * @see .addParseListener
   */
  removeParseListeners() {
      _parseListeners.clear()
  }

  /**
   * Notify any parse listeners of an enter rule event.
   *
   * @see .addParseListener
   */
  triggerEnterRuleEvent() {
      for (listener in _parseListeners) {
          listener.enterEveryRule(context!!)
          context!!.enterRule(listener)
      }
  }

  /**
   * Notify any parse listeners of an exit rule event.
   *
   * @see .addParseListener
   */
  triggerExitRuleEvent() {
      // reverse order walk of listeners
      for (let i in _parseListeners.indices.reversed()) {
          listener = _parseListeners[i]
          context!!.exitRule(listener)
          listener.exitEveryRule(context!!)
      }
  }

  //
//    /**
//     * The preferred method of getting a tree pattern. For example, here's a
//     * sample use:
//     *
//     * <pre>
//     * ParseTree t = parser.expr();
//     * ParseTreePattern p = parser.compileParseTreePattern("&lt;ID&gt;+0", MyParser.RULE_expr);
//     * ParseTreeMatch m = p.match(t);
//     * String id = m.get("ID");
//    </pre> *
//     */
//    compileParseTreePattern(pattern: string, patternRuleIndex: number): ParseTreePattern {
//        if (tokenStream != null) {
//            tokenSource = tokenStream!!.tokenSource
//            if (tokenSource is Lexer) {
//                lexer = tokenSource as Lexer
//                return compileParseTreePattern(pattern, patternRuleIndex, lexer)
//            }
//        }
//        throw UnsupportedOperationException("Parser can't discover a lexer to use")
//    }
//
//    /**
//     * The same as [.compileParseTreePattern] but specify a
//     * [Lexer] rather than trying to deduce it from this parser.
//     */
//    compileParseTreePattern(pattern: string, patternRuleIndex: number,
//                                lexer: Lexer): ParseTreePattern {
//        m = ParseTreePatternMatcher(lexer, this)
//        return m.compile(pattern, patternRuleIndex)
//    }
//
//    override setInputStream(input: numberStream) {
//        tokenStream = input as TokenStream
//    }
//
  notifyErrorListeners(msg: string) {
      require(currentToken != null)
      notifyErrorListeners(currentToken!!, msg, null)
  }

  notifyErrorListeners(
          offendingToken: Token, msg: string,
          e: RecognitionException?
  ) {
      numberOfSyntaxErrors++
      var line = -1
      var charPositionInLine = -1
      line = offendingToken.line
      charPositionInLine = offendingToken.charPositionInLine

      listener = errorListenerDispatch
      listener.syntaxError(this, offendingToken, line, charPositionInLine, msg, e)
  }

  //
//    /**
//     * Consume and return the [current symbol][.getCurrentToken].
//     *
//     *
//     * E.g., given the following input with `A` being the current
//     * lookahead symbol, this function moves the cursor to `B` and returns
//     * `A`.
//     *
//     * <pre>
//     * A B
//     * ^
//    </pre> *
//     *
//     * If the parser is not in error recovery mode, the consumed symbol is added
//     * to the parse tree using [ParserRuleContext.addChild], and
//     * [ParseTreeListener.visitTerminal] is called on any parse listeners.
//     * If the parser *is* in error recovery mode, the consumed symbol is
//     * added to the parse tree using [.createErrorNode] then
//     * [ParserRuleContext.addErrorNode] and
//     * [ParseTreeListener.visitErrorNode] is called on any parse
//     * listeners.
//     */
  consume(): Token {
      o = currentToken
      require(o != null, { "current token must not be null when consuming" })
      if (o!!.type != Recognizer.EOF) {
          inputStream!!.consume()
      }
      hasListener = _parseListeners.isNotEmpty()
      if (buildParseTree || hasListener) {
          if (errorHandler.inErrorRecoveryMode(this)) {
              node = context!!.addErrorNode(createErrorNode(context, o))
              for (listener in _parseListeners) {
                  listener.visitErrorNode(node)
              }
          } else {
              node = context!!.addChild(createTerminalNode(context, o))
              for (listener in _parseListeners) {
                  listener.visitTerminal(node)
              }

          }
      }
      return o
  }

  /** How to create a token leaf node associated with a parent.
   * Typically, the terminal node to create is not a function of the parent.
   *
   * @since 4.7
   */
  createTerminalNode(parent: ParserRuleContext?, t: Token): TerminalNode {
      return TerminalNodeImpl(t)
  }

  /** How to create an error node, given a token, associated with a parent.
   * Typically, the error node to create is not a function of the parent.
   *
   * @since 4.7
   */
  createErrorNode(parent: ParserRuleContext?, t: Token): ErrorNode {
      return ErrorNodeImpl(t)
  }

  addContextToParseTree() {
      parent = context!!.readParent() as ParserRuleContext?
      // add current context to parent if we have a parent
      if (parent != null) {
          parent.addChild(context!!)
      }
  }
//
  /**
   * Always called by generated parsers upon entry to a rule. Access field
   * [._ctx] get the current context.
   */
  enterRule(localctx: ParserRuleContext, state: number, ruleIndex: number) {
      this.state = state
      context = localctx
      context!!.start = _input!!.LT(1)
      if (buildParseTree) addContextToParseTree()
      triggerEnterRuleEvent()
  }

  exitRule() {
      if (isMatchedEOF) {
          // if we have matched EOF, it cannot consume past EOF so we use LT(1) here
          context!!.stop = _input!!.LT(1) // LT(1) will be end of file
      } else {
          context!!.stop = _input!!.LT(-1) // stop node is what we just matched
      }
      // trigger event on _ctx, before it reverts to parent
      triggerExitRuleEvent()
      state = context!!.invokingState
      context = context!!.readParent() as ParserRuleContext?
  }

  //
  enterOuterAlt(localctx: ParserRuleContext, altNum: number) {
      localctx.altNumber = altNum
      // if we have new localctx, make sure we replace existing ctx
      // that is previous child of parse tree
      if (buildParseTree && context !== localctx) {
          parent = context!!.readParent() as ParserRuleContext?
          if (parent != null) {
              parent.removeLastChild()
              parent.addChild(localctx)
          }
      }
      context = localctx
  }


  @Deprecated(
          "Use\n" +
                  "\t  {@link #enterRecursionRule(ParserRuleContext, int, int, int)} instead."
  )
  enterRecursionRule(localctx: ParserRuleContext, ruleIndex: number) {
      enterRecursionRule(localctx, atn.ruleToStartState!![ruleIndex]!!.stateNumber, ruleIndex, 0)
  }

  open enterRecursionRule(localctx: ParserRuleContext, state: number, ruleIndex: number, precedence: number) {
      this.state = state
      _precedenceStack.push(precedence)
      context = localctx
      context!!.start = _input!!.LT(1)
      triggerEnterRuleEvent() // simulates rule entry for left-recursive rules
  }

  /** Like [.enterRule] but for recursive rules.
   * Make the current context the child of the incoming localctx.
   */
  pushNewRecursionContext(localctx: ParserRuleContext, state: number, ruleIndex: number) {
      previous = context
      previous!!.assignParent(localctx)
      previous!!.invokingState = state
      previous!!.stop = _input!!.LT(-1)

      context = localctx
      context!!.start = previous!!.start
      if (buildParseTree) {
          context!!.addChild(previous)
      }

      triggerEnterRuleEvent() // simulates rule entry for left-recursive rules

  }

  unrollRecursionContexts(_parentctx: ParserRuleContext?) {
      _precedenceStack.pop()
      context!!.stop = _input!!.LT(-1)
      retctx = context // save current ctx (return value)

      // unroll so _ctx is as it was before call to recursive method

      while (context !== _parentctx) {
          triggerExitRuleEvent()
          context = context!!.readParent() as ParserRuleContext
      }

      // hook into tree
      retctx!!.assignParent(_parentctx)

      if (buildParseTree && _parentctx != null) {
          // add return ctx into invoking rule's tree
          _parentctx.addChild(retctx)
      }
  }

//    getInvokingContext(ruleIndex: number): ParserRuleContext? {
//        var p = context
//        while (p != null) {
//            if (p!!.ruleIndex == ruleIndex) return p
//            p = p!!.parent as ParserRuleContext
//        }
//        return null
//    }
//
//    override precpred(localctx: RuleContext, precedence: number): boolean {
//        return precedence >= _precedenceStack.peek()
//    }
//
//    inContext(context: string): boolean {
//        // TODO: useful in parser?
//        return false
//    }
//
//    /**
//     * Checks whether or not `symbol` can follow the current state in the
//     * ATN. The behavior of this method is equivalent to the following, but is
//     * implemented such that the complete context-sensitive follow set does not
//     * need to be explicitly constructed.
//     *
//     * <pre>
//     * return getExpectedTokens().contains(symbol);
//    </pre> *
//     *
//     * @param symbol the symbol type to check
//     * @return `true` if `symbol` can follow the current state in
//     * the ATN, otherwise `false`.
//     */
//    isExpectedToken(symbol: number): boolean {
//        //   		return getInterpreter().atn.nextTokens(_ctx);
//        atn = interpreter.atn
//        var ctx = context
//        s = atn.states.get(state)
//        var following = atn.nextTokens(s)
//        if (following.contains(symbol)) {
//            return true
//        }
//        //        System.out.println("following "+s+"="+following);
//        if (!following.contains(Token.EPSILON)) return false
//
//        while (ctx != null && ctx!!.invokingState >= 0 && following.contains(Token.EPSILON)) {
//            invokingState = atn.states.get(ctx!!.invokingState)
//            rt = invokingState.transition(0) as RuleTransition
//            following = atn.nextTokens(rt.followState)
//            if (following.contains(symbol)) {
//                return true
//            }
//
//            ctx = ctx!!.parent as ParserRuleContext
//        }
//
//        return if (following.contains(Token.EPSILON) && symbol == Token.EOF) {
//            true
//        } else false
//
//    }
//
  /** Get a rule's index (i.e., `RULE_ruleName` field) or -1 if not found.  */
  open getRuleIndex(ruleName: string): number {
      ruleIndex = ruleIndexMap[ruleName]
      return if (ruleIndex != null) ruleIndex!! else -1
  }

  //
  getRuleContext(): ParserRuleContext? {
      return context
  }

  getRuleInvocationStack(p: RuleContext?): string[] {
      var p = p
      ruleNames = ruleNames
      stack = Arraystring[]()
      while (p != null) {
          // compute what follows who invoked us
          ruleIndex = p!!.ruleIndex
          if (ruleIndex < 0)
              stack.add("n/a")
          else
              stack.add(ruleNames!![ruleIndex])
          p = p!!.readParent()
      }
      return stack
  }
//
//    /** For debugging and other purposes.  */
//    dumpDFA() {
//        synchronized(interpreter.decisionToDFA) {
//            var seenOne = false
//            for (d in 0 until interpreter.decisionToDFA.length) {
//                dfa = interpreter.decisionToDFA[d]
//                if (!dfa.states.isEmpty()) {
//                    if (seenOne) println()
//                    System.out.println("Decision " + dfa.decision + ":")
//                    System.out.print(dfa.toString(vocabulary))
//                    seenOne = true
//                }
//            }
//        }
//    }
//
//    /**
//     * @since 4.3
//     */
//    setProfile(profile: boolean) {
//        interp = interpreter
//        saveMode = interp.getPredictionMode()
//        if (profile) {
//            if (interp !is ProfilingATNSimulator) {
//                interpreter = ProfilingATNSimulator(this)
//            }
//        } else if (interp is ProfilingATNSimulator) {
//            sim = ParserATNSimulator(this, atn, interp.decisionToDFA, interp.getSharedContextCache())
//            interpreter = sim
//        }
//        interpreter.setPredictionMode(saveMode)
//    }
//
//    companion object {
//
//        /**
//         * This field maps from the serialized ATN string to the deserialized [ATN] with
//         * bypass alternatives.
//         *
//         * @see ATNDeserializationOptions.isGenerateRuleBypassTransitions
//         */
//        private bypassAltsAtnCache = WeakHashMap<String, ATN>()
//    }
}

