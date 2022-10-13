import { describe, it, expect } from "vitest";
import { payment } from "./main";

describe("calcTotalPrice", () => {
    it("Correct Path", () => {
        const pathing = "./src/shopTicket/database.csv";
        expect(payment(pathing)).toEqual(4);
    });
    it("Wrong Path", () => {
        const pathing = "./src/shopTicket/database2.csv";
        expect(payment(pathing)).toEqual("Error, wrong path.")
    });

    it("No Path", () => {
        expect(payment()).toEqual(4);
    });
});