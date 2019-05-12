export function toStructure(groups: any[]) {
  let structure = [];
  let index = 0;
  let currentItem = groups[0];

  let isBlockStart = () => {
    if (index >= groups.length) {
      return false;
    }
    return (
      groups[index].type === "BACKQUOTE" &&
      index + 1 < groups.length &&
      groups[index + 1].type === "LETTER"
    );
  };

  let isPair = () => {
    if (index >= groups.length) {
      return false;
    }
    return (
      groups[index].type === "LETTER" &&
      index + 1 < groups.length &&
      groups[index + 1].type === "COLON"
    );
  };

  let isBlockEnd = () => {
    if (index >= groups.length) {
      return false;
    }
    return (
      groups[index].type === "BACKQUOTE" && groups[index].value.length === 3
    );
  };

  while (index < groups.length) {
    while (isBlockStart()) {
      let block: any = {
        type: groups[index + 1].value,
        data: {}
      };

      index += 2;

      while (isPair()) {
        let key = groups[index].value;
        let value = "";
        index += 2;
        while (!isPair() && !isBlockEnd()) {
          if (index >= groups.length) {
            break;
          }
          value += groups[index].value;
          index += 1;
        }
        block.data[key] = value;
      }

      if (!isBlockEnd()) {
        throw new Error(
          `Expected \`\`\`, but get ${JSON.stringify(groups[index], null, 2)}`
        );
      }
      index += 1;
      structure.push(block);
    }
  }
  return structure;
}
