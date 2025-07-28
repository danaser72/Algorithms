var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim();
const N = parseInt(input);
let sum;
let ans = 0;
for (let i = 1; i <= N; i++) {
  sum = i;
  let pos = i;
  while (pos !== 0) {
    sum += parseInt(pos % 10);
    pos = parseInt(pos / 10);
  }
  sum += pos % 10;
  if (N === sum) {
    ans = i;
    break;
  }
}
console.log(ans);