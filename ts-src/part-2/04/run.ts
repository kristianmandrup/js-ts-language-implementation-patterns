import fs from "fs";
import path from "path";
import { firstLayerTokenizer } from "./first-layer-tokenizer";

let cssFilePath = path.join(__dirname, "files/test.css");
let content = fs.readFileSync(cssFilePath).toString();
let tokens = firstLayerTokenizer(content);

const destPath = path.join(__dirname, "dest/04.txt");
fs.writeFileSync(destPath, JSON.stringify(tokens, null, 2));
