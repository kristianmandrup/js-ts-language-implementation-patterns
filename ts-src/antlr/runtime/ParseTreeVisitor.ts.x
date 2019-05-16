export interface ParseTreeVisitor<T> {

  /**
   * Visit a parse tree, and return a user-defined result of the operation.
   *
   * @param tree The [ParseTree] to visit.
   * @return The result of visiting the parse tree.
   */
  visit(tree: ParseTree): T

  /**
   * Visit the children of a node, and return a user-defined result of the
   * operation.
   *
   * @param node The [RuleNode] whose children should be visited.
   * @return The result of visiting the children of the node.
   */
  visitChildren(node: RuleNode): T?

  /**
   * Visit a terminal node, and return a user-defined result of the operation.
   *
   * @param node The [TerminalNode] to visit.
   * @return The result of visiting the node.
   */
  visitTerminal(node: TerminalNode): T?

  /**
   * Visit an error node, and return a user-defined result of the operation.
   *
   * @param node The [ErrorNode] to visit.
   * @return The result of visiting the node.
   */
  visitErrorNode(node: ErrorNode): T?
}
