var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
const arr = input[1].split(" ").map(x => parseInt(x));
const _arr = Object.fromEntries([...new Set([...arr])].sort((a, b) => a - b).map((x, i) => [x, i]));
let result = [];
for (let i = 0; i < arr.length; i++){
    result.push(_arr[arr[i].toString()]);
}
console.log(result.join(" "));