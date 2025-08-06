const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const arr = input[1]
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
const DP = [];
let MAX = -1000 * 100000;
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (i === 0) {
    DP.push(num);
  } else {
    num = Math.max(DP[i - 1] + num, num);
    DP.push(num);
  }
  MAX = Math.max(num, MAX);
}
console.log(MAX)