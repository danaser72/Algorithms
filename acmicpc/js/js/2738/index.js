var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var NM = input[0].split(" ").map((x) => parseInt(x));
var result = new Array(NM[0]);
for (let i = 1; i < NM[0] + 1; i++) {
  const arr = input[i].split(" ").map((x) => parseInt(x));
  result[i - 1] = arr;
}
for (let i = NM[0] + 1; i < input.length; i++) {
  const arr2 = input[i].split(" ").map((x) => parseInt(x));
  for (let j = 0; j < arr2.length; j++) {
    result[i - NM[0] - 1][j] += arr2[j];
  }
}
result.map(x => {
    console.log(x.join(" "));
})