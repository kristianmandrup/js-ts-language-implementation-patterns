import { getFirstLayerToken } from "./get-first-layer-token";

export function firstLayerTokenizer(input: string) {
  let index = 0;
  let tokens = [];

  while (index < input.length) {
    let token = getFirstLayerToken(input, index);

    if (!token) {
      throw new Error(`Unknow char: ${input[index]}`);
    }

    tokens.push(token);

    index = token.end;
  }

  return tokens;
}
