import { IntStream } from "./IntStream";

type Interval = number;

export interface CharStream extends IntStream {
  /**
   * This method returns the text for a range of characters within this input
   * stream. This method is guaranteed to not throw an exception if the
   * specified `interval` lies entirely within a marked range. For more
   * information about marked ranges, see [IntStream.mark].
   *
   * @param interval an interval within the stream
   * @return the text of the specified interval
   *
   * @throws NullPointerException if `interval` is `null`
   * @throws IllegalArgumentException if `interval.a < 0`, or if
   * `interval.b < interval.a - 1`, or if `interval.b` lies at or
   * past the end of the stream
   * @throws UnsupportedOperationException if the stream does not support
   * getting the text of the specified interval
   */
  getText(interval: Interval): string;

  // static
  // EOF = IntStream.EOF
}
