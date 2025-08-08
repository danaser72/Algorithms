const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map((x) => parseInt(x));
let arr = [0].concat(input[1].split(" ").map((x) => parseInt(x)));
const cnt = [0];
for (let i = 1; i < arr.length; i++) {
  arr[i] = (arr[i - 1] + arr[i]) % M;
  if (!isNaN(cnt[arr[i]])) cnt[arr[i]]++;
  else cnt[arr[i]] = 0;
}
console.log(
  cnt.map((x) => (x * (x + 1)) / 2).reduce((acc, cur) => acc + cur, 0)
);