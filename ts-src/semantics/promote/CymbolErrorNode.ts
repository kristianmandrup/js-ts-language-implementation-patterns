import { CymbolAST } from "./CymbolAST";

export class CymbolErrorNode extends CymbolAST {
  delegate: any; // CommonErrorNode;

  constructor(
    input: TokenStream,
    start: Token,
    stop: Token,
    e: RecognitionException
  ) {
    this.delegate = new CommonErrorNode(input, start, stop, e);
  }

  public isNil(): boolean {
    return this.delegate.isNil();
  }

  public getType(): number {
    return this.delegate.getType();
  }

  public getText(): string {
    return this.delegate.getText();
  }
  public toString(): string {
    return this.delegate.toString();
  }
}
