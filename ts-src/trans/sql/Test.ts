import { createConnection } from "net";

/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

import { Connection, ResultSet } from "./Db";
import { PersonSerializer } from "./PersonSerializer";
import { Person } from "./Person";

export class Test {
  public static main(...args: string[]): void {
    if (args.length < 4) {
      console.error("Test server db user passwd");
      return;
    }
    const server = args[0];
    const username = args[1];
    const password = args[2];
    const db = args[3];
    //System.out.print("Testing "+server+"/"+db+":"+username+"/"+password+": ");
    try {
      const urlString = "jdbc:mysql://" + server + "/" + db;
      const con = Test.getConnection(urlString, username, password);
      // CREATE PERSON AND SERIALIZE
      PersonSerializer.init(con);
      const date = new Date(2000, 10, 5);
      const p = new Person("ter", "555-11-2222", date, 9);
      p.roles = ["ceo", "janitor"];
      PersonSerializer.savePerson(con, p); // SAVE Person TO DB
      // READ PERSON BACK IN
      const q = "SELECT * FROM Person WHERE ID=1"; // GET FIRST Person
      const stat = con.createStatement();
      const rs = stat.executeQuery(q);
      rs.next();
      const back = PersonSerializer.nextPerson(con, rs);
      console.log("read back: " + back);
      rs.close();
      con.close();
      console.log("OK");
    } catch (se) {
      console.log("FAILED");
      throw se;
    }
  }

  static getConnection(
    urlString: string,
    username: string,
    password: string
  ): Connection {
    return new Connection();
  }
}
