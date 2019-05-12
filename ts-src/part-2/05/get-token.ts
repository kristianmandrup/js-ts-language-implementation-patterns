import { patterns } from "./patterns";

export function getToken(input: string, start: number) {
  for (let key in patterns) {
    let tokenizer = patterns[key];
    let token = tokenizer(input, start);
    if (token) {
      return Object.assign({ type: key }, token);
    }
  }
}
