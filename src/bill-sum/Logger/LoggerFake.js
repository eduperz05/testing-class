import { Logger } from "./Logger.js";

export class LoggerFake extends Logger {
  log(data) {
    this.data = data;
  }
}
