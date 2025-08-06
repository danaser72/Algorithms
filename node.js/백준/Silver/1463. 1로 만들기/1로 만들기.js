const fs = require("fs");
const N = parseInt(fs.readFileSync(`/dev/stdin`).toString());
const DP = [0];
const MAX = Number.MAX_SAFE_INTEGER;
for (let i = 1; i <= N; i++) {
  if (i === 1) {
    DP.push(0);
  } else {
    DP.push(
      Math.min(
        DP[i - 1],
        i % 2 === 0 ? DP[i / 2] : MAX,
        i % 3 === 0 ? DP[i / 3] : MAX
      ) + 1
    );
  }
}
console.log(DP[N]);
