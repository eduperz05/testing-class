import fs from "fs";
/**
 * @param {string} DBPath
 * @return 
 */
export function payment(DBPath = "./src/shopTicket/database.csv") {
    let data = null;
    try {
        data = fs.readFileSync(DBPath, "utf-8");
    } catch (err) {
        return "Error, wrong path.";
    }

    const itemsLines = extractData(data);
    return calcPrice(itemsLines);
}

function calcPrice(itemsLine) {
    return itemsLine
        .map((element) => parseInt(element[1]) * parseInt(element[2]))
        .reduce((a, b) => { return a + b; });
}

function extractData(totalPrice) {
    return totalPrice
        .split("\n")
        .map((element) => element.split(", "));
}