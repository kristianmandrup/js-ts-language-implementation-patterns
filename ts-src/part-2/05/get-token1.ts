import { patterns1 } from "./patterns1";

export function getToken1(input: any, start: number) {
  for (let key in patterns1) {
    let tokenizer = patterns1[key];
    let token = tokenizer(input, start);
    if (token) {
      return Object.assign({ type: key }, token);
    }
  }
}
