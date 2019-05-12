export const createMatch = (char: string, length: number) => {
  let start = (value: any) => value === char;
  let end = (value: any) => {
    if (typeof length === "number" && value.length === length) {
      return true;
    }
    return value !== char;
  };
  return { start, end };
};
