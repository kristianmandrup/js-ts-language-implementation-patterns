import { createFlatTokenizer } from "./create-flat-tokenizer";
import { isLetter, isWhiteSpace, isNumber } from "./util";
import { createMatch } from "../05/create-match";

interface IPatterns {
  [key: string]: any;
}

export const firstLayerPatterns: IPatterns = {
  LETTER: createFlatTokenizer(isLetter),
  WHITE_SPACE: createFlatTokenizer(isWhiteSpace),
  NUMBER: createFlatTokenizer(isNumber),
  DOUBLE_QUOTES: createFlatTokenizer(createMatch('"', 1)),
  SINGLE_QUOTE: createFlatTokenizer(createMatch("'", 1)),
  LEFT_BRACKET: createFlatTokenizer(createMatch("(", 1)),
  RIGHT_BRACKET: createFlatTokenizer(createMatch(")", 1)),
  LEFT_BRACE: createFlatTokenizer(createMatch("{", 1)),
  RIGHT_BRACE: createFlatTokenizer(createMatch("}", 1)),
  SLASH: createFlatTokenizer(createMatch("/", 1)),
  BACK_SLANT: createFlatTokenizer(createMatch("\\", 1)),
  WHIFFLETREE: createFlatTokenizer(createMatch("-", 1)),
  BANG: createFlatTokenizer(createMatch("!", 1)),
  COLON: createFlatTokenizer(createMatch(":", 1)),
  DOT: createFlatTokenizer(createMatch(".", 1)),
  POUND_KEY: createFlatTokenizer(createMatch("#", 1)),
  SEMICOLON: createFlatTokenizer(createMatch(";", 1)),
  AT_SYMBOL: createFlatTokenizer(createMatch("@", 1)),
  COMMA: createFlatTokenizer(createMatch(",", 1)),
  EQUAL_SYMBOL: createFlatTokenizer(createMatch("=", 1)),
  UNDERLINE: createFlatTokenizer(createMatch("_", 1)),
  PERSCENT_SYMBOL: createFlatTokenizer(createMatch("%", 1)),
  ASTERISK: createFlatTokenizer(createMatch("*", 1)),
  LEFT_ANGLE_BRACKET: createFlatTokenizer(createMatch("<", 1)),
  RIGHT_ANGLE_BRACKET: createFlatTokenizer(createMatch(">", 1))
};
