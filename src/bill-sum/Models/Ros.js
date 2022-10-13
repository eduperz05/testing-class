export class Ros {
  constructor(lines) {
    this.lines = lines;
  }

  getTotal() {
    return this.lines
      .map((order) => order.getTotalPrice())
      .reduce((a, b) => a + b);
  }
}
