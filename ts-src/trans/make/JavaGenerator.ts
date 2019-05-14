import { MakeGenerator } from "./MakeGenerator";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

class OutputWriter {
  constructor(file: string) {}
}

export class JavaGenerator implements MakeGenerator {
  out: any;
  makefile: string;

  constructor(makefile: string) {
    this.makefile = makefile;
    const javafile = makefile + ".java";
    //System.out.println(makefile+" to "+javafile);
    this.out = new OutputWriter(javafile);
  }

  public start(): void {
    const { makefile, out } = this;
    out.println(
      "import java.io.IOException;\n" +
        "class " +
        makefile +
        " extends MakeSupport {\n" +
        "    public " +
        makefile +
        "() throws IOException {\n" +
        "        Target target = null;\n"
    );
  }

  public finish(): void {
    const { makefile, out } = this;
    out.println(
      "    }   \n" +
        "    \n" +
        "    public static void main(String[] args) throws Exception {\n" +
        "        String target = args[0];\n" +
        "        " +
        makefile +
        " m = new " +
        makefile +
        "();\n" +
        "        if ( m.targets.get(target)==null ) {\n" +
        '            System.err.println("No such target: "+target);\n' +
        "            System.exit(-1);\n" +
        "        }\n" +
        "        int r = m.build(target);\n" +
        "        System.exit(r);\n" +
        "    }\n" +
        "}\n"
    );
    out.close();
  }

  public target(t: string): void {
    const { out } = this;
    t = t.trim();
    out.println('\ttarget = new Target("' + t + '");');
  }

  public dependency(d: string): void {
    const { out } = this;
    d = d.trim();
    out.println('\ttarget.addDependency("' + d + '");');
  }

  public action(a: string): void {
    const { out } = this;
    a = a.trim();
    out.println('\ttarget.addAction("' + a + '");');
  }

  public endTarget(t: string): void {
    const { out } = this;
    t = t.trim();
    out.println('\ttargets.put("' + t + '", target);');
  }
}
