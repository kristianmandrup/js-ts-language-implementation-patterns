export const createFlatTokenizer = (match: any) => (
  input: string,
  start: number
) => {
  if (!match.start) {
    let _match = match;
    match = {
      start: _match,
      end() {
        return !_match.apply(null, arguments);
      }
    };
  }

  let offset = 0;
  let item = input[start + offset];
  let value: any[] = [];

  if (!match.start(item, value)) {
    return;
  }

  do {
    value.push(item);
    offset += 1;
    item = input[start + offset];
  } while (!match.end(item, value));

  return {
    value: value,
    start: start,
    end: start + offset
  };
};
