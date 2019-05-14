import { StreamVacuum } from "./StreamVacuum";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

class Executer {
  exec(action: string): any {
    return {};
  }
}

class Runtime {
  static getRuntime() {
    return new Executer();
  }
}

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
    const { actions, name } = this;
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

      if (stdout.toString().length > 0) {
        console.log(stdout);
      }

      if (stderr.toString().length > 0) {
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
