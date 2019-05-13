/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
 ***/

export class Person {
  public name: string; // single-valued fields:
  public SSN: string;
  public birthDay: Date;
  public age: number;
  public roles: string[] = []; // multi-valued fields:
  public vacation: Date[] = [];

  constructor(name: string, SSN: string, birthDay: Date, age: number) {
    this.name = name;
    this.SSN = SSN;
    this.birthDay = birthDay;
    this.age = age;
  }

  public toString(): string {
    const { name, SSN, birthDay, age, roles, vacation } = this;
    return (
      "Person{" +
      "name='" +
      name +
      "'" +
      ", SSN='" +
      SSN +
      "'" +
      ", birthDay=" +
      birthDay +
      ", age=" +
      age +
      ", roles=" +
      (roles == null ? null : roles) +
      ", vacation=" +
      (vacation == null ? null : vacation) +
      "}"
    );
  }
}
