import { describe, it, expect } from "vitest";
import { calcTotalPrice } from "./main";

describe("calcTotalPrice", () => {
    it("Correct Path", () => {
        const pathing = "./src/shopTicket/database.csv";
        expect(calcTotalPrice(pathing)).toEqual(4);
    });
    it("Wrong Path", () => {
        const pathing = "./src/shopTicket/database2.csv";
        expect(calcTotalPrice(pathing)).toEqual("Error, wrong path.")
    });

    it("No Path", () => {
        expect(calcTotalPrice()).toEqual(4);
    });
});