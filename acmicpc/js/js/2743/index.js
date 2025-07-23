var fs = require("fs");
// 제출 시, ${__dirname}/ 제거하고 사용
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
console.log(input.length);
