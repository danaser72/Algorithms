var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
let result = 0;
for (let n = 1; n < input.length; n++) {
  const str = input[n];
  let isgroup = true;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      for (let j = i + 1; j < str.length; j++) {
        if (str[i] === str[j]) {
          isgroup = false;
          break;
        }
      }
    }
    if (!isgroup) break;
  }
  if (isgroup) result++;
}
console.log(result);