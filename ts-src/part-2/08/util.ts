export const isWhiteSpace = (character: string) => {
  switch (character) {
    case " ":
    case "\t":
    case "\r":
      return true;
    default:
      return false;
  }
};

export const isOperand = (character: string) => {
  switch (character) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
};

export const isDigit = (character: string) => {
  return character >= "0" && character <= "9";
};

export const isParenthese = (character: string) => {
  return character === "(" || character === ")";
};

export const Program = "Program";
export const ExpressionStatement = "ExpressionStatement";
export const NumberLiteral = "NumberLiteral";
export const GroupingStatement = "GroupingStatement";
