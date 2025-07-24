var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
let coin = [25, 10, 5, 1];
for (let t = 1; t < input.length; t++) {
  let price = parseInt(input[t]);
  let result = new Array(4);
  for (let i = 0; i < coin.length; i++) {
    result[i] = parseInt(price / coin[i]);
    price %= coin[i];
  }
  console.log(result.join(" "));
}