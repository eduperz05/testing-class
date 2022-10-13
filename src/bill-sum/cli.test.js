import { describe, it, expect } from "vitest";
import { BillSumCli } from "./BillSumCli";
import { FileReaderFake } from "./FileReader/FileReaderFake.js";
import { LoggerFake } from "./Logger/LoggerFake.js";
import { CliArgumentsFake } from "./CliArguments/CliArgumentsFake.js";

describe("bill sum cli", () => {
  it.only("works", () => {
    const cliArguments = new CliArgumentsFake();
    const logger = new LoggerFake();
    const fileReader = new FileReaderFake();
    const billSumCli = new BillSumCli(cliArguments, logger, fileReader);

    billSumCli.execute();

    expect(logger.data).toEqual(35);
  });

  it("throws a descriptive error if file does not exists", () => {
    const cliArguments = new CliArgumentsFake();
    const logger = new LoggerFake();
    const fileReader = new FileReaderFake();
    fileReader.throwError();
    const billSumCli = new BillSumCli(cliArguments, logger, fileReader);

    billSumCli.execute();

    expect(logger.data).toEqual("El archivo no existe");
  });
});
