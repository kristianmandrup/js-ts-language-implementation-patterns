export const tokenNames = [
  "n/a",
  "<EOF>",
  "NAME",
  "COMMA",
  "LBRACK",
  "RBRACK",
  "EQUALS"
];
export const getTokenName = (index: number) => tokenNames[index];

export const NAME = 2;
export const COMMA = 3;
export const LBRACK = 4;
export const RBRACK = 5;
export const EQUALS = 6;
