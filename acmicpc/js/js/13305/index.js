const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const meter = input[1].split(" ").map((x) => parseInt(x));
const cost = input[2].split(" ").map((x) => parseInt(x));
let minCost = Number.MAX_SAFE_INTEGER;
let result = 0n;
for (let i = 0; i < meter.length; i++) {
  minCost = Math.min(minCost, cost[i]);
  result += BigInt(minCost) * BigInt(meter[i]);
}
console.log(`${result}`)