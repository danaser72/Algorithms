var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
var num = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let N = parseInt(input[0]);
let B = parseInt(input[1]);
let result = "";
while (N !== 0) {
  result += num[parseInt(N % B)];
  N = parseInt(N / B);
}
console.log(result.split("").reverse().join(""));