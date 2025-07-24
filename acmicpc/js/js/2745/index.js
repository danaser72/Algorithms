var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
var num = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var N = input[0].split('').reverse().join('');
var B = parseInt(input[1]);
var result = 0;
for (let i = 0; i < N.length; i++) {
    result += Math.pow(B, i) * num.indexOf(N[i]);
}
console.log(result);