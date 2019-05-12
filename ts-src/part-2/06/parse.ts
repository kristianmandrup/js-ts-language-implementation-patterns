import { toGroup } from "./to-group";
import { toStructure } from "./to-structure";

export function parse(inputs: string) {
  let groups = toGroup(inputs);
  let structure = toStructure(groups);
  return structure;
}
