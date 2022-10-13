import fs from "fs";
import { FileReader } from "./FileReader.js";

export class FileReaderFS extends FileReader {
  read(path) {
    return fs.readFileSync(path, "utf-8");
  }
}
