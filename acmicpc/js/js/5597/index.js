var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n").map(x => parseInt(x));
var result = new Array(30).fill(0).map((x, i) => i + 1);
for (let i = 0; i < input.length; i++) result[input[i] - 1] = undefined;
result.map((x) => {
  if (!!x) console.log(x);
});