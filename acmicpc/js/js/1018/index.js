var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const NM = input[0].split(" ");
const N = parseInt(NM[0]);
const M = parseInt(NM[1]);
let min = 32;
const pattern = ["BWBWBWBW", "WBWBWBWB"];
for (let i = 1; i <= N - 7 && min !== 0; i++) {
  for (let j = 0; j <= M - 8 && min !== 0; j++) {
    let cnt = 0;
    for (let m = i; m < i + 8; m++) {
      for (let n = j; n < j + 8; n++) {
        if (pattern[m % 2][n - j] !== input[m][n]) cnt++;
      }
    }
    min = Math.min(Math.min(cnt, 64 - cnt), min);
  }
}
console.log(min);