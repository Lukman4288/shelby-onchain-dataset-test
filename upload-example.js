import fs from "fs";

const dataset = JSON.parse(
  fs.readFileSync("./dataset-example.json", "utf8")
);

console.log("Uploading dataset to Shelby storage...");
console.log(dataset);

console.log("Dataset ready for decentralized storage experiment.");
