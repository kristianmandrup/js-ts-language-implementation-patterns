import { tokenizer, toChinese, toXML, parser, evaluated } from "./";

const run = () => {
  let expression = `1 + 2 + 3 * 4 + (5 + 6 * (7 + 8)) - 9/ 100 * 2 + 0.5 + -1.5`;
  let tokenList = tokenizer(expression);
  console.log("tokenList", tokenList);

  let ast = parser(tokenList);
  console.log("ast", ast);

  let xml = toXML(ast);
  console.log("xml", xml);

  let result = evaluated(ast);
  console.log("result", result);

  let chinese = toChinese(ast);
  console.log("chinese", chinese);
};
