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
const LCS = [];
for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  let seq = 1;
  for (let j = 0; j < i; j++) {
    if (arr[j] < num) {
      seq = Math.max(LCS[j] + 1, seq);
    }
  }
  LCS.push(seq);
}
console.log(Math.max.apply(null, LCS));
