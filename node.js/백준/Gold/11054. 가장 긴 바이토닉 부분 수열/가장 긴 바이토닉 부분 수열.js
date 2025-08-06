const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
const arr = input[1]
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
const LCS = Array.from({ length: N }, () => new Array(2));
for (let i = 0; i < arr.length; i++) {
  const num = arr[i];
  let seqUp = 1;
  let seqDown = 1;
  for (let j = 0; j < i; j++) {
    if (arr[j] < num) {
      seqUp = Math.max(LCS[j][0] + 1, seqUp);
    }
  }
  LCS[i][0] = seqUp;
}
for (let i = arr.length - 1; i >= 0; i--) {
  const num = arr[i];
  let seqDown = 1;
  for (let j = arr.length - 1; j > i; j--) {
    if (arr[j] < num) {
      seqDown = Math.max(LCS[j][1] + 1, seqDown);
    }
  }
  LCS[i][1] = seqDown;
}
let max = 0;
for (let i = 0; i < LCS.length; i++) {
  max = Math.max(max, LCS[i][0] + LCS[i][1]);
}
console.log(max - 1);
