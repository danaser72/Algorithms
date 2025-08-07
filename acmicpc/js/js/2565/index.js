const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
const arr = input
  .slice(1)
  .map((x) => x.split(" ").map((y) => parseInt(y)))
  .sort((a, b) => a[0] - b[0]);

const LCS = [];
for (let i = 0; i < arr.length; i++) {
  const num = arr[i][1];
  let score = 1;
  for (let j = 0; j < i; j++) {
    if (arr[j][1] < num) {
      score = Math.max(LCS[j] + 1, score);
    }
  }
  LCS.push(score);
}
console.log(N - Math.max.apply(null, LCS));