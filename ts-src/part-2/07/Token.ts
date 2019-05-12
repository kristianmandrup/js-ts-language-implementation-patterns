import { Character } from "./Character";
export class Token {
  type: number;
  startIndex: number;
  value: string;

  constructor(type: number, startIndex: number) {
    this.type = type;
    this.startIndex = startIndex;
    this.value = "";
  }

  add(character: any) {
    if (!character) return;
    this.value += character;
  }

  is(type: number) {
    return this.type === type;
  }
}
