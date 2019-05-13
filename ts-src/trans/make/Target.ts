/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

export class Target {
  name: string;
  actions: string[] = [];
  dependencies: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addDependency(d: string) {
    this.dependencies.push(d);
  }

  addAction(action: string) {
    this.actions.push(action);
  }

  exec(): number {
    const { actions } = this;
    if (actions == null) return 0;
    for (let action of actions) {
      console.log("build(" + name + "): " + action + "\n");
      const r = Runtime.getRuntime();
      const p = r.exec(action);
      const stdout = new StreamVacuum(p.getInputStream());
      const stderr = new StreamVacuum(p.getErrorStream());
      stdout.start();
      stderr.start();
      p.waitFor();
      stdout.join();
      stderr.join();
      if (stdout.tostring().length() > 0) {
        console.log(stdout);
      }
      if (stderr.tostring().length() > 0) {
        console.error(stderr);
      }
      if (p.exitValue() != 0) {
        //System.err.println(action+" exited with "+p.exitValue());
        return p.exitValue();
      }
    }
    return 0;
  }
}
