import { FileReader } from "./FileReader.js";

export class FileReaderFake extends FileReader {
  read(path) {
    if (this.shouldThrowError) {
      throw new Error("El archivo no existe");
    }

    return `manzanas,1,10
peras,1,20
platanos,1,5`;
  }

  throwError() {
    this.shouldThrowError = true;
  }
}
