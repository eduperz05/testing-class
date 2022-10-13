import { Logger } from "./Logger.js";

export class LoggerColors extends Logger {
  log(data) {
    console.log(`--> ${data} <--`);
  }
}
