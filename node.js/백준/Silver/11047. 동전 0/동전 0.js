const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
let [N, K] = input[0].split(" ").map((x) => parseInt(x));
let cnt = 0;
for (let i = input.length - 1; i >= 1; i--) {
  const coin = parseInt(input[i]);
  cnt += parseInt(K / coin);
  K %= coin;
}
console.log(cnt)