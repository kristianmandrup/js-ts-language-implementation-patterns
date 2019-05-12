import { Tokenizer, Parser, XMLPrinter, Interpreter } from ".";

export function run() {
  let expression = `1 + 2 + 3 * 4 + (5 + 6 * (7 + 8)) - 9/ 100 * 2 + 0.5 + -1.5`;
  let tokenizer = new Tokenizer(expression);
  let parser = new Parser(tokenizer.execute());
  parser.execute();

  let xmlPrinter = new XMLPrinter(parser.output);
  let interpreter = new Interpreter(parser.output);

  xmlPrinter.execute();
  interpreter.execute();
  console.log("ast", parser.output);
  console.log("result", interpreter.output);
  console.log("xml");
  console.log(xmlPrinter.output);

  // document.documentElement.innerHTML = xmlPrinter.output;
}

// run();
