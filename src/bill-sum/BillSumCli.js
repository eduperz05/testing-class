import { CliArguments } from "./CliArguments/CliArguments.js";
import { FileReader } from "./FileReader/FileReader.js";
import { Logger } from "./Logger/Logger.js";

export class BillSumCli {
  constructor(
    cliArguments = new CliArguments(),
    logger = new Logger(),
    fileReader = new FileReader()
  ) {
    this.cliArguments = cliArguments;
    this.logger = logger;
    this.fileReader = fileReader;
  }

  execute() {
    const filePath = this.cliArguments.readFirstArgument();
    try {
      const datos = this.fileReader.read(filePath);

      const csvData = this.parseCsv(datos);
      const data = this.summatory(csvData);

      this.logger.log(data);
    } catch (error) {
      this.logger.log("El archivo no existe");
    }
  }

  /**
   * It takes an array of numbers and returns the sum of all the numbers in the array
   * @param csvData - The data from the CSV file.
   * @returns The sum of all the values in the array.
   */
  summatory(csvData) {
    return csvData.reduce((a, b) => a + b);
  }

  parseCsv(datos) {
    return datos
      .split("\n")
      .map((line) => line.split(","))
      .map((columnas) => columnas[1])
      .map((string) => parseInt(string));
  }
}
