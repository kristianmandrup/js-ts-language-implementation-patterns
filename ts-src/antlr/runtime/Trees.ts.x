import { Tree } from './Tree';
const Trees = {

  /** Print out a whole tree in LISP form. [.getNodeText] is used on the
   * node payloads to get the text for the nodes.  Detect
   * parse trees and extract data appropriately.
   */
   toStringTree(t: Tree, recog?: Parser): String {
      const ruleNames = recog != null ? recog!!.ruleNames : null
      const ruleNamesList = ruleNames != null ? Array.from(ruleNames!!) : null
      return Trees.toStringTree(t, ruleNamesList)
  },

  /** Print out a whole tree in LISP form. [.getNodeText] is used on the
   * node payloads to get the text for the nodes.
   */
   toStringTree(t: Tree, ruleNames?: string[]): string {
      var s = Utils.escapeWhitespace(getNodeText(t, ruleNames), false)
      if (t.childCount == 0) return s
      const buf = StringBuilder()
      buf.append("(")
      s = Utils.escapeWhitespace(getNodeText(t, ruleNames), false)
      buf.append(s)
      buf.append(' ')
      for (i in 0 until t.childCount) {
          if (i > 0) buf.append(' ')
          buf.append(toStringTree(t.getChild(i)!!, ruleNames))
      }
      buf.append(")")
      return buf.toString()
  },

   getNodeText(t: Tree, recog: Parser?): string {
      const ruleNames = if (recog != null) recog!!.ruleNames else null
      const ruleNamesList = if (ruleNames != null) Arrays.asList<String>(*ruleNames!!) else null
      return getNodeText(t, ruleNamesList)
  },

   getNodeText(t: Tree, ruleNames: string[]): string {
      if (ruleNames != null) {
          if (t is RuleContext) {
              const ruleIndex = (t as RuleContext).ruleContext.ruleIndex
              const ruleName = ruleNames.get(ruleIndex)
              const altNumber = (t as RuleContext).altNumber
              return if (altNumber != ATN.INVALID_ALT_NUMBER) {
                  ruleName + ":" + altNumber
              } else ruleName
          } else if (t is ErrorNode) {
              return t.toString()
          } else if (t is TerminalNode) {
              const symbol = (t as TerminalNode).symbol
              if (symbol != null) {
                  return symbol!!.text!!
              }
          }
      }
      // no recog for rule names
      const payload = t.payload
      return if (payload is Token) {
          (payload as Token).text!!
      } else t.payload.toString()
  },

  /** Return ordered list of all children of this node  */
   getChildren(t: Tree): Tree[] {
      const kids = ArrayList<Tree>()
      for (i in 0 until t.childCount) {
          kids.add(t.getChild(i)!!)
      }
      return kids
  },

  /** Return a list of all ancestors of this node.  The first node of
   * list is the root and the last is the parent of this node.
   *
   * @since 4.5.1
   */
   getAncestors(t: Tree): List<out Tree> {
      var t = t
      if (t.readParent() == null) return emptyList<Tree>()
      const ancestors = ArrayList<Tree>()
      t = t.readParent()!!
      while (t != null) {
          ancestors.add(0, t) // insert at start
          t = t.readParent()!!
      }
      return ancestors
  },

  /** Return true if t is u's parent or a node on path to root from u.
   * Use == not equals().
   *
   * @since 4.5.1
   */
   isAncestorOf(t: Tree?, u: Tree?): Boolean {
      if (t == null || u == null || t!!.readParent() == null) return false
      var p: Tree? = u!!.readParent()
      while (p != null) {
          if (t === p) return true
          p = p!!.readParent()
      }
      return false
  }

   findAllTokenNodes(t: ParseTree, ttype: Int): Collection<ParseTree> {
      return findAllNodes(t, ttype, true)
  }

   findAllRuleNodes(t: ParseTree, ruleIndex: Int): Collection<ParseTree> {
      return findAllNodes(t, ruleIndex, false)
  }

   findAllNodes(t: ParseTree, index: Int, findTokens: Boolean): List<ParseTree> {
      const nodes = ArrayList<ParseTree>()
      _findAllNodes(t, index, findTokens, nodes)
      return nodes
  }

   _findAllNodes(t: ParseTree, index: Int, findTokens: Boolean,
                    nodes: MutableList<in ParseTree>) {
      // check this node (the root) first
      if (findTokens && t is TerminalNode) {
          const tnode = t as TerminalNode
          if (tnode.symbol!!.type === index) nodes.add(t)
      } else if (!findTokens && t is ParserRuleContext) {
          const ctx = t as ParserRuleContext
          if (ctx.ruleIndex === index) nodes.add(t)
      }
      // check children
      for (i in 0 until t.childCount) {
          _findAllNodes(t.getChild(i)!!, index, findTokens, nodes)
      }
  }

  /** Get all descendents; includes t itself.
   *
   * @since 4.5.1
   */
   getDescendants(t: ParseTree): List<ParseTree> {
      const nodes = ArrayList<ParseTree>()
      nodes.add(t)

      const n = t.childCount
      for (i in 0 until n) {
          nodes.addAll(getDescendants(t.getChild(i)!!))
      }
      return nodes
  }


  @Deprecated("")
   descendants(t: ParseTree): List<ParseTree> {
      return getDescendants(t)
  }

  /** Find smallest subtree of t enclosing range startTokenIndex..stopTokenIndex
   * inclusively using postorder traversal.  Recursive depth-first-search.
   *
   * @since 4.5.1
   */
   getRootOfSubtreeEnclosingRegion(t: ParseTree,
                                      startTokenIndex: Int, // inclusive
                                      stopTokenIndex: Int)  // inclusive
          : ParserRuleContext? {
      const n = t.childCount
      for (i in 0 until n) {
          const child = t.getChild(i)
          const r = getRootOfSubtreeEnclosingRegion(child!!, startTokenIndex, stopTokenIndex)
          if (r != null) return r
      }
      if (t is ParserRuleContext) {
          const r = t as ParserRuleContext
          if (startTokenIndex >= r.start!!.tokenIndex && // is range fully contained in t?
                  (r.stop == null || stopTokenIndex <= r.stop!!.tokenIndex)) {
              // note: r.getStop()==null likely implies that we bailed out of parser and there's nothing to the right
              return r
          }
      }
      return null
  }

  /** Replace any subtree siblings of root that are completely to left
   * or right of lookahead range with a CommonToken(Token.INVALID_TYPE,"...")
   * node. The source interconst for t is not altered to suit smaller range!
   *
   * WARNING: destructive to t.
   *
   * @since 4.5.1
   */
   stripChildrenOutOfRange(t: ParserRuleContext?,
                              root: ParserRuleContext,
                              startIndex: Int,
                              stopIndex: Int) {
      if (t == null) return
      for (i in 0 until t!!.childCount) {
          const child = t!!.getChild(i)
          const range = child!!.sourceInterval
          if (child is ParserRuleContext && (range.b < startIndex || range.a > stopIndex)) {
              if (isAncestorOf(child, root)) { // replace only if subtree doesn't have displayed root
                  const abbrev = CommonToken(Token.INVALID_TYPE, "...")
                  t!!.children!!.set(i, TerminalNodeImpl(abbrev))
              }
          }
      }
  }

  /** Return first node satisfying the pred
   *
   * @since 4.5.1
   */
   findNodeSuchThat(t: Tree?, pred: Predicate<Tree>): Tree? {
      if (pred.test(t!!)) return t

      if (t == null) return null

      const n = t!!.childCount
      for (i in 0 until n) {
          const u = findNodeSuchThat(t!!.getChild(i), pred)
          if (u != null) return u
      }
      return null
  }
}
