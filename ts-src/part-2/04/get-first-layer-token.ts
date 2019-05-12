import { firstLayerPatterns } from "./first-layer-patterns";

export function getFirstLayerToken(input: string, start: number) {
  for (let key in firstLayerPatterns) {
    let tokenizer = firstLayerPatterns[key];
    let token = tokenizer(input, start);
    if (token) {
      return Object.assign({ type: key }, token);
    }
  }
}
