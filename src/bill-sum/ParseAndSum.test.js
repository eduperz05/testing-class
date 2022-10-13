import { describe, expect, it } from "vitest";
import { OrderLine } from "./Models/OrderLine";
import { ParseAndSum } from "./ParseAndSum";

describe("ParseAndSum", () => {
  it("computes the total sum of the ros", () => {
    const parseAndSum = new ParseAndSum();

    const total = parseAndSum.parseAndSum("bread,1,1");

    expect(total).toBe(1);
  });

  it("transforms a row into a orderLine", () => {
    const parseAndSum = new ParseAndSum();

    const orderLine = parseAndSum.parseRowToOrderLine(
      "apples (red, 1Kg bag), 1, 2"
    );

    expect(orderLine).toEqual(new OrderLine("apples (red, 1Kg bag)", 1, 2));
  });
});
