var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
const NM = input[0].trim().split(" ");
const N = parseInt(NM[0]);
const M = parseInt(NM[1]);
const arr = input[1].trim().split(" ").map(x => parseInt(x)).sort((a, b) => b - a);
let found = false;
let result = 0;
for (let i = 0; i < arr.length - 2 && !found; i++) {
  for (let j = i + 1; j < arr.length - 1 && !found; j++) {
    if (arr[i] + arr[j] >= M) continue;
    for (let k = j + 1; k < arr.length && !found; k++) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum > M) continue;
      if (sum === M) {
        result = M;
        found = true;
        break;
      }

      result = (M - sum) < (M - result) ? sum : result;
    }
  }
}
console.log(result);