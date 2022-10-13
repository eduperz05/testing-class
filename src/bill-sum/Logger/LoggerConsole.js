import { Logger } from "./Logger.js";

export class LoggerConsole extends Logger {
  log(data) {
    console.log(data);
  }
}
