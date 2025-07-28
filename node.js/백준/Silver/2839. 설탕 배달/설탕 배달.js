var fs = require("fs");
var input = parseInt(fs.readFileSync(`/dev/stdin`).toString().trim());
let cnt5 = parseInt(input / 5),
  cnt3 = 0;
while (cnt5 !== -1) {
  if (input % 5 === 0 || (input - cnt5 * 5) % 3 === 0) {
    cnt3 = (input - cnt5 * 5) / 3;
    break;
  }
  cnt5--;
}
console.log(cnt5 + cnt3);