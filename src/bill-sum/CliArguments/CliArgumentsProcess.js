import { CliArguments } from "./CliArguments.js";

export class CliArgumentsProcess extends CliArguments {
  readFirstArgument() {
    return process.argv[2];
  }
}
