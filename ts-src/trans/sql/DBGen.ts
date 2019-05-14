import { Person } from "./Person";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/
import { TypeRenderer } from "./TypeRenderer";

import * as fs from "fs";
const readFile = (fileName: string) => fs.readFileSync(fileName, "utf8");

class StringTemplateGroup {
  constructor(input: string) {}

  getInstanceOf(id: string): any {
    return this;
  }

  registerRenderer(target: any, renderer: TypeRenderer) {}
}

class StringTemplate {
  setAttribute(id: string, value: any) {}
}

class Field {}

export class DBGen {
  static main(...args: string[]): void {
    if (args.length != 1) {
      console.error("java DBGen [-sql|-java]");
      return;
    }
    let groupFile;
    if (args[0] === "-sql") groupFile = "SQL2.stg";
    else if (args[0] === "-java") groupFile = "persist.stg";
    else {
      console.error("java DBGen [-sql|-java]");
      return;
    }
    // LOAD TEMPLATES
    const fr = readFile(groupFile);
    const templates = new StringTemplateGroup(fr);

    templates.registerRenderer(DBGen, new TypeRenderer());
    // GEN OUTPUT
    const output = DBGen.gen(templates, Person);
    console.log(output.toString());
  }

  public static gen(templates: StringTemplateGroup, c: any): StringTemplate {
    const fields: Field[] = [];
    const arrayFields: Field[] = [];
    const nonPrimitiveTypes: any[] = [];
    DBGen.filterFields(c, fields, arrayFields, nonPrimitiveTypes);
    const classST = templates.getInstanceOf("output");
    classST.setAttribute("class", c);
    classST.setAttribute("fields", fields);
    classST.setAttribute("arrayFields", arrayFields);
    classST.setAttribute("nonPrimitiveTypes", nonPrimitiveTypes);
    return classST;
  }

  protected static filterFields(
    c: any,
    fields: Field[],
    arrayFields: Field[],
    nonPrimitiveTypes: any[]
  ): void {
    for (let f of c.getFields()) {
      if (f.getType().isArray()) arrayFields.push(f);
      else {
        fields.push(f);
        if (!f.getType().isPrimitive()) {
          nonPrimitiveTypes.push(f.getType());
        }
      }
    }
  }
}
