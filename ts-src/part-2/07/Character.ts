import {
  SPACE,
  TAB,
  NEW_LINE,
  PLUS_SIGN,
  MINUS_SIGN,
  MULTIPLICATION_SIGN,
  DEVISION_SIGN,
  ZERO,
  NINE,
  DOT,
  LEFT_PARENTHESE,
  RIGHT_PARENTHESE
} from "./tokens";

export class Character {
  value: any;

  constructor(value: any) {
    this.value = value;
  }
  isWhiteSpace() {
    switch (this.value) {
      case SPACE:
      case TAB:
      case NEW_LINE:
        return true;
      default:
        return false;
    }
  }
  isOperand() {
    switch (this.value) {
      case PLUS_SIGN:
      case MINUS_SIGN:
      case MULTIPLICATION_SIGN:
      case DEVISION_SIGN:
        return true;
      default:
        return false;
    }
  }
  isDigit() {
    return this.value >= ZERO && this.value <= NINE;
  }
  isDot() {
    return this.value === DOT;
  }
  isLeftParenthese() {
    return this.value === LEFT_PARENTHESE;
  }
  isRightParenthese() {
    return this.value === RIGHT_PARENTHESE;
  }
}
