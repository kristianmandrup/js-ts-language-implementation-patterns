export const isWhiteSpace = (char: string) =>
  char === " " || char === "\n" || char === "\r" || char === "\t";
export const isLetter = (char: string) =>
  (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
