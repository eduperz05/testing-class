import { CliArguments } from "./CliArguments.js";

export class CliArgumentsFake extends CliArguments {
  readFirstArgument() {
    return "src/bill-sum/datos.csv";
  }
}
