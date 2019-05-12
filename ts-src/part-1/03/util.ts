// const isClassSelector =

const syntaxMap = {
  SELECTOR: `
		[DOT|POUND_KEY]LETTER
	`
};

// Combine two functions
const compose = (f1: Function, f2: Function) => (arg: any) => f1(f2(arg));

// Connect two functions
const pipe = (f1: Function, f2: Function) => (arg: any) => f2(f1(arg));

const isFn = (obj: any) => typeof obj === "function";

const returnTrue = () => true;

// Determine whether the input character is a letter, that is, between a-zA-Z
const isLetter = (char: string) =>
  (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

// is a space or other separator
const isWhiteSpace = (char: string) =>
  char === " " || char === "\t" || char === "\n" || char === "\r";

const isNumber = (char: string) => !isNaN(Number(char.trim()));

interface IMap {
  [key: string]: any;
}

const charMap: IMap = {
  LETTER: isLetter,
  WHITE_SPACE: isWhiteSpace,
  NUMBER: isNumber,
  DOUBLE_QUOTES: '"',
  SINGLE_QUOTE: "'",
  LEFT_BRACKET: "(",
  RIGHT_BRACKET: ")",
  LEFT_BRACE: "{",
  RIGHT_BRACE: "}",
  SLASH: "/",
  BACK_SLANT: "\\",
  WHIFFLETREE: "-",
  BANG: "!",
  COLON: ":",
  DOT: ".",
  POUND_KEY: "#",
  SEMICOLON: ";",
  AT_SYMBOL: "@",
  COMMA: ",",
  EQUAL_SYMBOL: "=",
  UNDERLINE: "_",
  " PERSCENT_SYMBOL ": " % ",
  ASTERISK: "*"
};

export const getCharPattern = (char: string) => {
  for (let key in charMap) {
    let value: any = charMap[key];
    if (isFn(value) && value(char)) {
      return {
        type: key,
        match: value
      };
    } else if (char === value) {
      return {
        type: key,
        match: (char: string) => char === value
      };
    }
  }

  // default
  return {
    type: "UNKNOW",
    match: returnTrue
  };
};
