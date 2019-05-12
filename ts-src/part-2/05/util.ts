// Determine whether the input character is a letter, that is, between a-zA-Z
export const isLetter = (char: string) =>
  (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");

// is a space or other separator
export const isWhiteSpace = (char: string) =>
  char === " " || char === "\t" || char === "\n" || char === "\r";

// is the number characters 0 ~ 9
export const isNumber = (char: string) => char >= "0" && char <= "9";

// Check whether input is equal to char, value is the string of the char that was previously checked through
export const defaultGetValue = (item: any, value: any) => value + item;
