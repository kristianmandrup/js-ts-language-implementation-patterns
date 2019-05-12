import { isWhiteSpace, isDigit, isOperand, isParenthese } from "./util";
// import { Token } from '../07/Token'

export const tokenizer = (input: string) => {
  let tokenList: any[] = [];
  let index = 0;
  let character: string = "";

  let next = () => {
    character = input[index++];
  };

  let peek = (n = 0) => {
    return input[index + n];
  };

  let ignoreWhiteSpace = () => {
    while (isWhiteSpace(character)) {
      next();
    }
  };

  let consume = () => {
    next();
    ignoreWhiteSpace();
  };

  let handleNumber = () => {
    let value = character;
    let nextCharacter = peek();
    while (isDigit(nextCharacter) || nextCharacter === ".") {
      value += nextCharacter;
      next();
      nextCharacter = peek();
    }
    tokenList.push({
      type: "number",
      value: value
    });
  };

  let handleOperand = () => {
    let isNumber = (character === "-" || character === "+") && isDigit(peek());
    if (isNumber) {
      return handleNumber();
    }
    tokenList.push({
      type: "operand",
      value: character
    });
  };

  let handleParenthese = () => {
    tokenList.push({
      type: "parenthese",
      value: character
    });
  };

  while (index < input.length) {
    consume();

    if (isOperand(character)) {
      handleOperand();
      continue;
    }

    if (isDigit(character)) {
      handleNumber();
      continue;
    }

    if (isParenthese(character)) {
      handleParenthese();
      continue;
    }
  }

  return tokenList;
};
