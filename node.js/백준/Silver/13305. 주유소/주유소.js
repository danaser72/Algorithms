const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const meter = input[1].split(" ").map((x) => parseInt(x));
const cost = input[2].split(" ").map((x) => parseInt(x));
let minCost = Number.MAX_SAFE_INTEGER;
let result = 0;
for (let i = 0; i < meter.length; i++) {
  minCost = Math.min(minCost, cost[i]);
  result += minCost * meter[i];
}
console.log(result)