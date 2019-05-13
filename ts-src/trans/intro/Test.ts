/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
export class Test {
  static main(args: string[]) {
    const assign = "<left> = <right>;";
    const st = new StringTemplate(assign, AngleBracketTemplateLexer);
    st.setAttribute("left", "x"); // attribute left is a string
    st.setAttribute("right", 99); // attribute right is an integer
    const output = st.toString(); // render template to text
    console.log(output);
  }
}
