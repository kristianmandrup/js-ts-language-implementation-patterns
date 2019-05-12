import { createTokenizer } from "./create-tokenizer";
import { isLetter, isNumber, isWhiteSpace } from "./util";
import { createMatch } from "./create-match";

interface IPatterns {
  [key: string]: any;
}

export const patterns: IPatterns = {
  DOUBLE_QUOTES_STRING: createTokenizer({
    last: true,
    start: (char: string) => char === '"',
    end: (char: string) => char === '"'
  }),
  SINGLE_QUOTES_STRING: createTokenizer({
    last: true,
    start: (char: string) => char === "'",
    end: (char: string) => char === "'"
  }),
  NAME: createTokenizer({
    start: isLetter,
    end: (char: string) =>
      !isLetter(char) && !isNumber(char) && char !== "_" && char !== "-"
  }),
  NUMBER: createTokenizer({
    start: isNumber,
    end: (value: any) => !isNumber(value)
  }),
  WHITE_SPACE: createTokenizer({
    start: isWhiteSpace,
    end: (value: any) => !isWhiteSpace(value)
  }),
  LEFT_BRACKET: createTokenizer(createMatch("(", 1)),
  RIGHT_BRACKET: createTokenizer(createMatch(")", 1)),
  LEFT_BRACE: createTokenizer(createMatch("{", 1)),
  RIGHT_BRACE: createTokenizer(createMatch("}", 1)),
  SLASH: createTokenizer(createMatch("/", 1)),
  BACK_SLANT: createTokenizer(createMatch("\\", 1)),
  WHIFFLETREE: createTokenizer(createMatch("-", 1)),
  BANG: createTokenizer(createMatch("!", 1)),
  COLON: createTokenizer(createMatch(":", 1)),
  DOT: createTokenizer(createMatch(".", 1)),
  POUND_KEY: createTokenizer(createMatch("#", 1)),
  SEMICOLON: createTokenizer(createMatch(";", 1)),
  AT_SYMBOL: createTokenizer(createMatch("@", 1)),
  COMMA: createTokenizer(createMatch(",", 1)),
  EQUAL_SYMBOL: createTokenizer(createMatch("=", 1)),
  UNDERLINE: createTokenizer(createMatch("_", 1)),
  PERSCENT_SYMBOL: createTokenizer(createMatch("%", 1)),
  ASTERISK: createTokenizer(createMatch("*", 1)),
  LEFT_ANGLE_BRACKET: createTokenizer(createMatch("<", 1)),
  RIGHT_ANGLE_BRACKET: createTokenizer(createMatch(">", 1)),
  UNKNOW: createTokenizer({
    start: () => true,
    end: () => true
  })
};
