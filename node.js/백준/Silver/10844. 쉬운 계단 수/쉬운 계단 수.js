const fs = require("fs");
const N = parseInt(fs.readFileSync(`/dev/stdin`).toString());
const DP = [0];
for (let i = 1; i <= N; i++) {
  const _arr = new Array(10);
  if (i === 1) {
    for (let j = 0; j < 10; j++) {
      if (j === 0) _arr[j] = 0;
      else _arr[j] = 1;
    }
  } else {
    for (let j = 0; j < 10; j++) {
      switch (j) {
        case 0:
          _arr[j] = DP[i - 1][j + 1];
          break;
        case 9:
          _arr[j] = DP[i - 1][j - 1];
          break;
        default:
          _arr[j] = (DP[i - 1][j - 1] + DP[i - 1][j + 1]) % 1000000000;
          break;
      }
    }
  }
  DP.push(_arr);
}
console.log(`${DP[N].reduce((acc, cur) => (acc + cur)% 1000000000, 0)}`);
