const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const [N, M, K] = input[0].split(" ").map((x) => parseInt(x));
const sum = [new Array(M + 1).fill(0)];
const chess = []
for (let i = 1; i < input.length; i++) {
  const arr = input[i].trim().split("");
  const plate = [];
  for (let j = 0; j < M; j++) {
    const sign = (i + j) % 2 === 0 ? -1 : 1;
    const cur = ((arr[j].trim() === "B" ? -1 : 1) === sign) ? 1 : 0;
    plate.push(cur)
  }
  chess.push(plate);
}

for (let i = 1; i < chess.length + 1; i++) {
  const arr = [0].concat(chess[i - 1].slice());
  for (let j = 1; j < M + 1; j++) {
    const cur = arr[j];
    arr[j] = cur + arr[j - 1] + sum[i - 1][j] - sum[i - 1][j - 1];
  }
  sum.push(arr);
}

let min = Number.MAX_SAFE_INTEGER;
for (let i = 1; i <= N - K + 1 && min !== 0; i++) {
  for (let j = 1; j <= M - K + 1 && min !== 0; j++) {
    let acc = Math.abs(
      sum[i + K - 1][j + K - 1] -
        sum[i - 1][j + K - 1] -
        sum[i + K - 1][j - 1] +
        sum[i - 1][j - 1]
    );
    min = Math.min(min, acc, K * K - acc);
  }
}
console.log(min)