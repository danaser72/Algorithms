var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().toUpperCase().split("");
var alphabet = new Array(26).fill(0);
for (let i = 0; i < input.length; i++) {
  alphabet[input[i].charCodeAt(0) - "A".charCodeAt(0)]++;
}
let max = Math.max.apply(null, alphabet);
if (alphabet.filter(x => x === max).length == 1) {
  console.log(String.fromCharCode(alphabet.indexOf(max) + "A".charCodeAt()));
} else {
  console.log("?");
}