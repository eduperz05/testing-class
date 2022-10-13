import { CliArguments } from "./CliArguments/CliArguments.js";
import { FileReader } from "./FileReader/FileReader.js";
import { Logger } from "./Logger/Logger.js";
import { OrderLine } from "./Models/OrderLine.js";
import { Ros } from "./Models/Ros.js";
import { ParseAndSum } from "./ParseAndSum.js";

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
      const rosString = this.fileReader.read(filePath);
      const fopo = new ParseAndSum();
      const total = fopo.parseAndSum(rosString);

      this.logger.log(total);
    } catch (error) {
      this.logger.log("El archivo no existe");
    }
  }

<<<<<<< HEAD
  /**
   * It takes an array of numbers and returns the sum of all the numbers in the array
   * @param csvData - The data from the CSV file.
   * @returns The sum of all the values in the array.
   */
  summatory(csvData) {
    return csvData.reduce((a, b) => a + b);
=======
  parseCsv(rosString) {
    const orderLines = rosString
      .trim()
      .split("\n")
      .map((line) => this.parseRowToOrderLine(line));

    const ros = new Ros(orderLines);

    return ros;
>>>>>>> 11a9298e6e153331e36e969c168531f9b6e807dc
  }

  parseRowToOrderLine(row) {
    const columns = row.split(",");

    return new OrderLine(columns[0], columns[1], columns[2]);
  }
}
