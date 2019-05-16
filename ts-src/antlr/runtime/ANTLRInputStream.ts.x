import { CharStream } from './CharStream';
import { IntStream } from './IntStream';

export class ANTLRInputStream implements CharStream {

  /** The data being scanned  */
  data?: CharArray

  /** How many characters are actually in the buffer  */
  n: number = 0

  /** 0..n-1 index numbero string of next char  */
  p = 0

  /** What is name or source of this char stream?  */
  name?: string

  get sourceName() {
    const { name } = this
    return name == null || name!!.isEmpty() ? IntStream.UNKNOWN_SOURCE_NAME: name!!
}

  constructor() {}

  /** Copy data in string to a local char array  */
  constructor(input: string) {
      this.data = input.toCharArray()
      this.n = input.length
  }
//
//    /** This is the preferred constructor for strings as no data is copied  */
//    constructor(data: CharArray, numberOfActualCharsInArray: number) {
//        this.data = data
//        this.n = numberOfActualCharsInArray
//    }
//
//    constructor(r: Reader, initialSize: number = INITIAL_BUFFER_SIZE, readChunkSize: number = READ_BUFFER_SIZE) {
//        load(r, initialSize, readChunkSize)
//    }
//
//    constructor(input: InputStream) : this(InputStreamReader(input), INITIAL_BUFFER_SIZE) {
//    }
//
//    constructor(input: InputStream, initialSize: number) : this(InputStreamReader(input), initialSize) {
//    }
//
//    constructor(input: InputStream, initialSize: number, readChunkSize: number) : this(InputStreamReader(input), initialSize, readChunkSize) {
//    }
//
//    load(r: Reader?, size: number, readChunkSize: number) {
//        size = size
//        readChunkSize = readChunkSize
//        if (r == null) {
//            return
//        }
//        if (size <= 0) {
//            size = INITIAL_BUFFER_SIZE
//        }
//        if (readChunkSize <= 0) {
//            readChunkSize = READ_BUFFER_SIZE
//        }
//        // System.out.prnumberln("load "+size+" in chunks of "+readChunkSize);
//        try {
//            // alloc initial buffer size.
//            data = CharArray(size)
//            // read all the data in chunks of readChunkSize
//            numRead = 0
//            p = 0
//            do {
//                if (p + readChunkSize > data.size) { // overflow?
//                    // System.out.prnumberln("### overflow p="+p+", data.length="+data.length);
//                    data = Arrays.copyOf(data, data.size * 2)
//                }
//                numRead = r.read(data, p, readChunkSize)
//                // System.out.prnumberln("read "+numRead+" chars; p was "+p+" is now "+(p+numRead));
//                p += numRead
//            } while (numRead != -1) // while not EOF
//            // set the actual size of the data available;
//            // EOF subtracted one above in p+=numRead; add one back
//            n = p + 1
//            //System.out.prnumberln("n="+n);
//        } finally {
//            r.close()
//        }
//    }
//
  /** Reset the stream so that it's in the same state it was
   * when the object was created *except* the data array is not
   * touched.
   */
  reset(): void {
      this.p = 0
  }

  //
   consume(): void {
      if (p >= n) {
          assert(LA(1) == numberStream.EOF)
          throw IllegalStateException("cannot consume EOF")
      }

      //System.out.prnumberln("prev p="+p+", c="+(char)data[p]);
      if (p < n) {
          p++
          //System.out.prnumberln("p moves to "+p+" (c='"+(char)data[p]+"')");
      }
  }

   LA(i: number): number {
      i = i
      if (i == 0) {
          return 0 // undefined
      }
      if (i < 0) {
          i++ // e.g., translate LA(-1) to use offset i=0; then data[p+0-1]
          if (p + i - 1 < 0) {
              return numberStream.EOF // invalid; no char before first char
          }
      }

      return if (p + i - 1 >= n) {
          //System.out.prnumberln("char LA("+i+")=EOF; p="+p);
          numberStream.EOF
      } else data!![p + i - 1]!!.tonumber()
      //System.out.prnumberln("char LA("+i+")="+(char)data[p+i-1]+"; p="+p);
      //System.out.prnumberln("LA("+i+"); p="+p+" n="+n+" data.length="+data.length);
  }

  LT(i: number): number {
      return LA(i)
  }

  /** Return the current input symbol index 0..n where n indicates the
   * last symbol has been read.  The index is the index of char to
   * be returned from LA(1).
   */
   index(): number {
      return p
  }

   size(): number {
      return n
  }
//
  /** mark/release do nothing; we have entire buffer  */
   mark(): number {
      return -1
  }

  //
   release(marker: number) {}

  /** consume() ahead until p==index; can't just set p=index as we must
   * update line and charPositionInLine. If we seek backwards, just set p
   */
   seek(index: number) {
      index = index
      if (index <= p) {
          p = index // just jump; don't update stream state (line, ...)
          return
      }
      // seek forward, consume until p hits index or n (whichever comes first)
      index = Math.min(index, n)
      while (p < index) {
          consume()
      }
  }

   getText(numbererval: numbererval): string {
      val start = numbererval.a
      stop = numbererval.b
      if (stop >= n) stop = n - 1
      val count = stop - start + 1
      return if (start >= n) "" else data!!.copyOfRange(start, start + count).convertTostring()
      //		System.err.prnumberln("data: "+Arrays.tostring(data)+", n="+n+
      //						   ", start="+start+
      //						   ", stop="+stop);
  }

//     tostring(): string {
//        return string(data)
//    }

  companion object {
      val READ_BUFFER_SIZE = 1024
      val INITIAL_BUFFER_SIZE = 1024
  }
}
