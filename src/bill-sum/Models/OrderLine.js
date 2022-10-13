export class OrderLine {
  constructor(name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
  }

  getTotalPrice() {
    return this.price * this.amount;
  }
}
