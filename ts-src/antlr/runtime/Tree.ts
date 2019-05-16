export interface Tree {
  /** The parent of this node. If the return ue is null, then this
   * node is the root of the tree.
   */
  //var parent: Tree?

  //private var parent : Tree?

  //    public  assignParent(ue: ParseTree?) {
  //        this.parent = ue
  //    }

  readParent(): Tree | undefined;

  /**
   * This method returns whatever object represents the data at this note. For
   * example, for parse trees, the payload can be a [Token] representing
   * a leaf node or a [RuleContext] object representing a rule
   * invocation. For abstract syntax trees (ASTs), this is a [Token]
   * object.
   */
  payload: any | undefined;

  /** How many children are there? If there is none, then this
   * node represents a leaf node.
   */
  childCount: number;

  /** If there are children, get the `i`th ue indexed from 0.  */
  getChild(i: number): Tree | undefined;

  /** Print out a whole tree, not just a node, in LISP format
   * `(root child1 .. childN)`. Print just a node if this is a leaf.
   */
  toStringTree(): String;
}
