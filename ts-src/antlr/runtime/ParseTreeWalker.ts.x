class ParseTreeWalker {

  walk(listener: ParseTreeListener, t: ParseTree) {
      if (t is ErrorNode) {
          listener.visitErrorNode(t as ErrorNode)
          return
      } else if (t is TerminalNode) {
          listener.visitTerminal(t as TerminalNode)
          return
      }
      val r = t as RuleNode
      enterRule(listener, r)
      val n = r.childCount
      for (i in 0 until n) {
          walk(listener, r.getChild(i)!!)
      }
      exitRule(listener, r)
  }

  /**
   * The discovery of a rule node, involves sending two events: the generic
   * [ParseTreeListener.enterEveryRule] and a
   * [RuleContext]-specific event. First we trigger the generic and then
   * the rule specific. We to them in reverse order upon finishing the node.
   */
  enterRule(listener: ParseTreeListener, r: RuleNode) {
      val ctx = r.ruleContext as ParserRuleContext
      listener.enterEveryRule(ctx)
      ctx.enterRule(listener)
  }

  exitRule(listener: ParseTreeListener, r: RuleNode) {
      val ctx = r.ruleContext as ParserRuleContext
      ctx.exitRule(listener)
      listener.exitEveryRule(ctx)
  }

  // static
  // DEFAULT = ParseTreeWalker()
}
