import { Person } from "./Person";
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

class StringTemplateGroup {
  constructor(input: string) {}

  getInstanceOf(id: string): any {
    return this;
  }
}

class StringTemplate {}

class Field {}

import * as fs from "fs";
const readFile = (fileName: string) => fs.readFileSync(fileName, "utf8");

export class GenSchema {
  templates: StringTemplateGroup;

  public static main(...args: string[]): void {
    const gen = new GenSchema();
    const schemaST = gen.genSchema(Person);
    console.log(schemaST.toString());
  }

  constructor() {
    const fr = readFile("SQL.stg");
    this.templates = new StringTemplateGroup(fr);
  }

  public genSchema(c: any): StringTemplate {
    const fields: Field[] = [];
    const arrayFields: Field[] = [];
    this.filterFields(c, fields, arrayFields);
    const classST = this.templates.getInstanceOf("objectTables");
    classST.setAttribute("class", c);
    classST.setAttribute("fields", fields);
    classST.setAttribute("arrayFields", arrayFields);
    return classST;
  }

  protected filterFields(c: any, fields: Field[], arrayFields: Field[]): void {
    for (let f of c.getFields()) {
      if (f.getType().isArray()) arrayFields.push(f);
      else fields.push(f);
    }
  }
}
