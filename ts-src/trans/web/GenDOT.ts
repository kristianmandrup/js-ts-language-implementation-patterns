import { LinkViz } from "./LinkViz";

/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
export class GenDOT {
  public static main(...args: string[]): void {
    const viz = new LinkViz();
    viz.addLink("index.html", "login.html");
    viz.addLink("index.html", "about.html");
    viz.addLink("login.html", "error.html");
    viz.addLink("about.html", "news.html");
    viz.addLink("index.html", "news.html");
    viz.addLink("logout.html", "index.html");
    viz.addLink("index.html", "logout.html");
    console.log(viz.toString());
  }
}
