import { BillSumCli } from "./BillSumCli.js";
import { FileReaderFS } from "./FileReader/FileReaderFS.js";
import { CliArgumentsProcess } from "./CliArguments/CliArgumentsProcess.js";
import { LoggerColors } from "./Logger/LoggerColors.js";
import { LoggerConsole } from "./Logger/LoggerConsole.js";

const cliArguments = new CliArgumentsProcess();
const logger = new LoggerColors();
const fileReader = new FileReaderFS();

const billSumCli = new BillSumCli(cliArguments, logger, fileReader);

billSumCli.execute();
