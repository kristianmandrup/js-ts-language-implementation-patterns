import { defaultGetValue } from "./util";
export const createTokenizer = (match: any) => {
  let tokenizer = (input: string, start: number) => {
    let item = input[start];
    // if (match.test) {
    // 	console.log(item, start)
    // }
    if (!match.start(item)) {
      return;
    }

    let value = "";

    if (match.getInitialValue) {
      value = match.getInitialValue(item);
    }

    let getValue = match.getValue || defaultGetValue;
    let offset = 0;

    if (match.first !== false) {
      value = getValue(item, value, offset);
    }

    if (match.check && match.check(value, offset, start) === false) {
      return;
    }

    offset += 1;
    item = input[start + offset];

    while (item !== undefined && !match.end(item, value)) {
      value = getValue(item, value, offset);
      offset += 1;
      item = input[start + offset];
      if (match.check && match.check(value, offset, start) === false) {
        return;
      }
    }

    if (item && match.last === true) {
      value = getValue(item, value, offset);
      offset += 1;
      if (match.check && match.check(value, offset, start) === false) {
        return;
      }
    }

    if (match.getFinalValue) {
      value = match.getFinalValue(value, offset, start);
    }

    return {
      value: value,
      start: start,
      end: start + offset
    };
  };

  return tokenizer;
};
