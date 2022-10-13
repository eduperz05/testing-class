import fs from "fs";
/**
 * @param {string} DBPath
 * @return 
 */
export function calcTotalPrice(DBPath = "./src/shopTicket/database.csv") {
    let totalPrice = null;
    console.log(totalPrice);

    try {
        totalPrice = fs.readFileSync(DBPath, "utf-8");
    } catch (err) {
        return "Error, wrong path.";
    }

    return totalPrice
        .split("\n")
        .map((element) => element.split(", "))
        .map((element) => parseInt(element[1]) * parseInt(element[2]))
        .reduce((a, b) => { return a + b });
}