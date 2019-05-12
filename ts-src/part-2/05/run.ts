import fs from "fs";
import path from "path";
import { tokenizer } from "./tokenizer";
import { tokenizer1 } from "./tokenizer1";

let cssFilePath = path.join(__dirname, "files/test.css");
let content = fs.readFileSync(cssFilePath).toString();

let tokens = tokenizer(content);
let tokens1 = tokenizer1(tokens);

let destPath = path.join(__dirname, "dest/05.json");
fs.writeFileSync(destPath, JSON.stringify(tokens1, null, 2));
