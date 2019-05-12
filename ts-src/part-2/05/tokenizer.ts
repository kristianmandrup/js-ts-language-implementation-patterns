import { getToken } from "./get-token";

export function tokenizer(input: string) {
  let index = 0;
  let tokens: any[] = [];
  while (index < input.length) {
    let token = getToken(input, index);
    if (token) {
      tokens[tokens.length] = token;
      index = token.end;
    }
  }
  return tokens;
}
