// Combine two functions
export const compose = (f1: Function, f2: Function) => (arg: any) =>
  f1(f2(arg));

// Connect two functions
export const pipe = (f1: Function, f2: Function) => (arg: any) => f2(f1(arg));

export const isFn = (obj: any) => typeof obj === "function";

export const returnTrue = () => true;

// Determine whether the input character is a letter, that is, between a-zA-Z
export const isLetter = (char: string) =>
  (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

// is a space or other separator
export const isWhiteSpace = (char: string) =>
  char === " " || char === "\t" || char === "\n" || char === "\r";

// is the number characters 0 ~ 9
export const isNumber = (char: string) => char >= "0" && char <= "9";
