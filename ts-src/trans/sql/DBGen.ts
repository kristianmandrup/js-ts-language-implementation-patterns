import { Person } from './Person';
/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
***/
import { TypeRenderer } from './TypeRenderer'

export class DBGen {
    static main(...args: string[]) : void {
        if ( args.length!=1 ) {
            console.error("java DBGen [-sql|-java]");
            return;
        }
        let groupFile;
        if ( args[0] === "-sql") groupFile = "SQL2.stg";
        else if ( args[0] === "-java") groupFile = "persist.stg";
        else {console.error("java DBGen [-sql|-java]"); return;}
        // LOAD TEMPLATES
        const fr = new FileReader(groupFile);
        const templates = new StringTemplateGroup(fr);
        fr.close();
        templates.registerRenderer(DBGen, new TypeRenderer());
        // GEN OUTPUT
        const output = gen(templates, Person);
        console.log(output.toString());
    }
    
    public static gen(templates: StringTemplateGroup, c: any): StringTemplate
    {
        const fields = [];
        const arrayFields = [];
        const nonPrimitiveTypes = new Set();
        filterFields(c, fields, arrayFields, nonPrimitiveTypes);
        StringTemplate classST = templates.getInstanceOf("output");
        classST.setAttribute("class",             c);
        classST.setAttribute("fields",            fields);
        classST.setAttribute("arrayFields",       arrayFields);
        classST.setAttribute("nonPrimitiveTypes", nonPrimitiveTypes);
        return classST;
    }
    
    protected static filterFields(c: any , fields: Field[],
                                       arrayFields: Field[],
                                       nonPrimitiveTypes: Set): void
    {
        for (let f of c.getFields()) {
            if (f.getType().isArray()) arrayFields.add(f);
            else {
                fields.push(f);
                if (!f.getType().isPrimitive()) {
                    nonPrimitiveTypes.add(f.getType());
                }
            }
        }
    }
}
