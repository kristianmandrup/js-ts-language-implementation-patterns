// Check whether input is equal to char, value is the string of the char that was previously checked through
export const createMatch = (char: string, length: number) => (
  input: string,
  value: any
) => {
  if (typeof length === "number" && value.length === length) {
    return false;
  }
  return input === char;
};
