import { OrderLine } from "./Models/OrderLine";
import { Ros } from "./Models/Ros";

export class ParseAndSum {
  parseAndSum(rosString) {
    const ros = this.parseCsv(rosString);
    return ros.getTotal();
  }

  parseCsv(rosString) {
    const orderLines = rosString
      .trim()
      .split("\n")
      .map((line) => this.parseRowToOrderLine(line));

    const ros = new Ros(orderLines);

    return ros;
  }

  parseRowToOrderLine(row) {
    const columns = row.split(",");

    return new OrderLine(columns[0], columns[1], columns[2]);
  }
}
