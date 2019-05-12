import { createTokenizer } from "./create-tokenizer";

interface IMap {
  [key: string]: any;
}

export const patterns1: IMap = {
  RULE: createTokenizer({
    last: true,
    getInitialValue: () => [],
    check: (value: any) => !!value,
    start: (token: any) => token.type === "NAME",
    end: (token: any, value: any) => {
      return token.type === "SEMICOLON";
    },
    getValue: (token: any, value: any, offset: number) => {
      if (value.length === 0) {
        value.push(token);
        return value;
      }

      let last = value[value.length - 1];
      if (
        value.length === 1 &&
        last.type === "NAME" &&
        token.type !== "COLON"
      ) {
        return;
      }

      value.push(token);
      return value;
    },
    getFinalValue: (tokens: any[]) => tokens.map(token => token.value).join("")
  }),
  // 'RULES': createTokenizer({
  // 	test: true,
  // 	last: true,
  // 	start: token => token.type === 'LEFT_BRACE',
  // 	end: token => token.type === 'RIGHT_BRACE',
  // 	getValue: (item, value) => value + item.value,
  // }),
  SELECTOR: createTokenizer({
    start: (token: any) =>
      token.type !== "LEFT_BRACE" &&
      token.type !== "WHITE_SPACE" &&
      token.type !== "SEMICOLON",
    end: (token: any) =>
      token.type === "WHITE_SPACE" || token.type === "LEFT_BRACE",
    getValue: (item: any, value: any) => value + item.value
  }),
  UNKNOW: createTokenizer({
    start: () => true,
    end: () => true,
    getValue: (item: any) => item
  })
};
