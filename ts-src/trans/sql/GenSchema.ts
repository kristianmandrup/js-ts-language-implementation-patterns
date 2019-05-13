/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

export class GenSchema {
  templates: StringTemplateGroup;

  public static main(...args: string[]): void {
    const gen = new GenSchema();
    const schemaST = gen.genSchema(Person.class);
    console.log(schemaST.toString());
  }

  constructor() {
    const fr = new FileReader("SQL.stg");
    this.templates = new StringTemplateGroup(fr);
    fr.close();
  }

  public genSchema(c: any): StringTemplate {
    const fields = [];
    const arrayFields = [];
    this.filterFields(c, fields, arrayFields);
    const classST = templates.getInstanceOf("objectTables");
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
