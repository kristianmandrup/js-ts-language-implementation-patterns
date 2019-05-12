import * as fs from "fs";
import * as path from "path";
import { TokenStream } from "./TokenStream";

const rootPath = path.join(__dirname, "..", "..");

const defaults = {
  cssFilePath: path.join(rootPath, "files/test.css"),
  destFilePath: path.join(rootPath, "dest/03.txt")
};

interface IArgs {
  cssFilePath?: string;
  destFilePath?: string;
}

export const write = ({ cssFilePath, destFilePath }: IArgs = {}) => {
  cssFilePath = cssFilePath || defaults.cssFilePath;
  destFilePath = destFilePath || defaults.destFilePath;

  const content = fs.readFileSync(cssFilePath).toString();
  const tokenStream = new TokenStream(content);

  let result = "";
  while (!tokenStream.isEnd()) {
    const token = tokenStream.next();
    let strToken = token ? token.toString() : "";
    result += token + "\n";
  }
  fs.writeFileSync(destFilePath, result);
};
