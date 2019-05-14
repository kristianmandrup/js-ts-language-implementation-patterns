/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

/** Render Java Class objects in templates using getSimpleName() not
 *  the fully qualified name (getName()). For type int, template expression
 *    <type> yields "int"
 *    <type; format="capitalized"> yields "Int"
 */

class AttributeRenderer {}

export class TypeRenderer implements AttributeRenderer {
  toString(o: any, formatName?: string): string {
    if (formatName) {
      if (formatName === "capitalized") {
        return this.capitalize(o.getSimpleName());
      }
    }
    return o.getSimpleName();
  }

  protected capitalize(s: string): string {
    s = s[0].toUpperCase() + s.substring(1);
    return s;
  }
}
