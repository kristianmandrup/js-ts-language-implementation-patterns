import { isWhiteSpace, isLetter } from "./util";

export function toGroup(inputs: string) {
  let index = 0;
  let groups = [];
  let char = "";
  let ignoreWhiteSpace = () => {
    while (isWhiteSpace(char)) {
      char = inputs[index++];
    }
  };
  let getNext = () => {
    char = inputs[index++];
  };

  getNext();

  while (char != null) {
    ignoreWhiteSpace();

    if (char == null) {
      break;
    }

    let value = "";

    while (char === "`") {
      value += char;
      getNext();
    }

    if (value) {
      groups.push({
        type: "BACKQUOTE",
        value: value
      });
      continue;
    }

    while (isLetter(char)) {
      value += char;
      getNext();
    }

    if (value) {
      groups.push({
        type: "LETTER",
        value: value
      });
      continue;
    }

    if (char === ":") {
      groups.push({
        type: "COLON",
        value: char
      });
      getNext();
      continue;
    }

    groups.push({
      type: "UNKNOW",
      value: char
    });
    getNext();
  }

  return groups;
}
