import { getToken1 } from "./get-token1";
export function tokenizer1(input: any[]) {
  let index = 0;
  let tokens: any[] = [];
  while (index < input.length) {
    let token = getToken1(input, index);
    if (token) {
      tokens[tokens.length] = token;
      index = token.end;
    }
  }
  return tokens;
}
