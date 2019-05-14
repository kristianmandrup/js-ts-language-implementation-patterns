import { Target } from "./Target";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

interface ITargetMap {
  [key: string]: Target;
}

class File {
  constructor(fileName: string) {}

  exists() {
    return true;
  }

  lastModified() {
    return new Date();
  }
}

export class MakeSupport {
  targets: ITargetMap = {};

  build(target: string): number {
    const { targets } = this;
    // System.out.println("target="+target);
    const t = targets[target];
    if (t == null) return 0; // nothing to do; no target
    const targetFile = new File(target);
    const n = t.dependencies.length;
    let buildTarget = false;
    if (n == 0) buildTarget = true; // always build if no dependencies
    for (let dep of t.dependencies) {
      const depFile = new File(dep);
      // if not there or modified after target, make that dependency and the target
      if (
        !depFile.exists() ||
        depFile.lastModified() > targetFile.lastModified()
      ) {
        // System.out.println(dep+" doesn't exist or newer than "+target);
        buildTarget = true;
        const errorCode = this.build(dep);
        if (errorCode != 0) return errorCode;
      }
    }

    if (buildTarget) {
      const errorCode = t.exec();
      return errorCode;
    }

    return 0;
  }
}
