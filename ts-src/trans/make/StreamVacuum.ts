/***
 * Excerpted from "Language Implementation Patterns",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material, 
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose. 
 * Visit http://www.pragmaticprogrammer.com/titles/tpdsl for more book information.
***/

export class StreamVacuum {
	buf: string = "";
	in: BufferedReader;
	sucker: Thread;

	constructor(in: InputStream) {
		this.in = new BufferedReader( new InputStreamReader(in) );
	}

	start(): void {
		sucker = new Thread(this);
		sucker.start();
	}

	run(): void {
		try {
			const line = in.readLine();
			while (line!=null) {
				buf.append(line);
				buf.append('\n');
				line = in.readLine();
			}
		}
		catch (IOException ioe) {
			System.err.println("can't read output from process");
		}
	}

	/** wait for the thread to finish */
	join(): void{
		sucker.join();
	}
	
	toString(): string {
		return buf.toString();
	}
}
