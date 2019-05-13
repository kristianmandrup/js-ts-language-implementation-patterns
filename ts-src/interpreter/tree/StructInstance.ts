import { MemorySpace } from "./MemorySpace";
import { StructSymbol } from "./StructSymbol";

/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
/** A scope holding fields of a struct instance.  There can be
 *  multiple struct instances but only one StructSymbol (definition).
 */
class StructInstance extends MemorySpace {
  def: StructSymbol; // what kind of struct am I?

  constructor(struct: StructSymbol) {
    super(struct.name + " instance");
    this.def = struct;
  }

  toString(): string {
    let buf = "";
    buf.concat("{");
    let first = true;
    for (let fieldName in this.def.fields) {
      let v = this.members.get(fieldName);
      if (!first) buf.concat(", ");
      else first = false;
      buf.concat(fieldName);
      buf.concat("=");
      buf.concat(v);
    }
    buf.concat("}");
    return buf;
  }
}
