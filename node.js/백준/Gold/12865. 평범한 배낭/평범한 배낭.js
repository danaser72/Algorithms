const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0]
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
const goods = input.slice(1).map((x) => x.trim());
let DP = { 0: 0 };
for (let i = 0; i < goods.length; i++) {
  let [W, V] = goods[i].split(" ").map((x) => parseInt(x));
  const tmp = {};
  for (const key in DP) {
    const _key = parseInt(key);
    if (_key + W <= K) {
      tmp[_key + W] = DP[_key] + V;
    }
  }
  for (const key in tmp) {
    const _key = parseInt(key);
    DP[_key] = Math.max(tmp[_key], !isNaN(DP[_key]) ? DP[_key] : 0);
  }
}
let max = 0;
for (const key in DP){
  max = Math.max(max, DP[key]);
}
console.log(max)