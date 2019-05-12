import { StatListNode } from "./StatListNode";
import { VectorNode } from "./VectorNode";
import { AddNode } from "./AddNode";
import { PrintNode } from "./PrintNode";
import { IntNode } from "./IntNode";
import { MultNode } from "./MultNode";
import { DotProductNode } from "./DotProductNode";
import { AssignNode } from "./AssignNode";
import { VarNode } from "./VarNode";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
type Node =
  | StatListNode
  | VectorNode
  | AddNode
  | PrintNode
  | IntNode
  | MultNode
  | DotProductNode
  | AssignNode
  | VarNode;

export interface VecMathVisitor {
  visit: (n: Node) => void;
}
