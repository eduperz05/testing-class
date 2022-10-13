import { describe, expect, it } from "vitest";
import { OrderLine } from "./OrderLine";
import { Ros } from "./Ros";

describe("Ros", () => {
  it("computes the total sum of the ros", () => {
    const orderLine1 = new OrderLine("apples", 1, 2);
    const orderLine2 = new OrderLine("banana", 2, 3);
    const ros = new Ros([orderLine1, orderLine2]);

    const total = ros.getTotal();

    expect(total).toBe(8);
  });
});
