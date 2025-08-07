const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0]
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
const goods = input.slice(1).map((x) => x.trim());
//#region 내 풀이
/*
//let DP = { 0: 0 };
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
 */
//#endregion

//#region 다른 풀이 방식
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < goods.length; i++) {
  const W = parseInt(goods[i].split(" ")[0]);
  min = Math.min(min, W);
}
const DP = [];
for (let i = 0; i < min; i++) {
  DP.push(new Array(N).fill(0))
}
for (let i = min; i <= K; i++) {
  DP.push([]);
  for (let j = 0; j < goods.length; j++) {
    let val = 0;
    const [W, V] = goods[j].split(" ").map((x) => parseInt(x));
    if (i >= W) {
      val = Math.max(DP[i][j - 1] || 0, (DP[i - W][j - 1] || 0) + V);
    } else {
      val = DP[i][j - 1] || 0;
    }
    DP[i].push(val);
  }
}
console.log(DP[K][N - 1]);
//#endregion
