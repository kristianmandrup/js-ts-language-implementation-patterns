interface ILexer {}

class Lexer implements ILexer {
  constructor(input: string, opts = {}) {}
}

class Type {}

export class Token {
  static EOF = -1;

  getType(): Type {
    return new Type();
  }
}

class Stack<T> {
  pop() {}
  size(): number {
    return 1;
  }
}

export class Wiki extends Lexer {
  public static ITALICS = 8;
  public static ELSE = 18;
  public static TABLE = 12;
  public static SECTION = 11;
  public static UL = 10;
  public static LI = 9;
  public static SEC_TAIL = 14;
  public static EOF = -1;
  public static TABLE_CONTENT = 17;
  public static COL = 16;
  public static LINK = 7;
  public static TITLE = 5;
  public static BOLD = 6;
  public static TAIL = 4;
  public static BLANK_LINE = 13;
  public static ROW = 15;

  out: any;

  context: Stack<String> = new Stack<String>();

  closeList() {
    const { context } = this;
    if (context.size() == 0) return;
    const list = context.pop();
    this.out.println("</" + list + ">");
  }
  upcomingEndOfCol(): boolean {
    return true;
  }

  constructor(input: string, opts: { state?: any; out?: any } = {}) {
    super(input, opts.state);
    const { out, state } = opts;
  }
  public getGrammarFileName(): string {
    return "/Users/parrt/research/book/TPDSL/Book/code/trans/wiki/Wiki.g";
  }

  public nextToken(): Token {
    return new Token();
  }
}
