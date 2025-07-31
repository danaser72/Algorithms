const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
const stack = [];
let cur = -1;
for (let i = 1; i < input.length; i++) {
  const N = parseInt(input[i]);
  if (N === 0) {
    cur--;
  } else {
    stack[cur + 1] = N;
    cur++;
  }
}
let sum = 0;
for (let i = 0; i < cur + 1; i++) {
  sum += stack[i];
}
console.log(sum);