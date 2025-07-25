var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
var N = parseInt(input[0]);
var x = [];
var y = [];
for (let n = 1; n < input.length; n++) {
    const arr = input[n].trim().split(" ").map(x => parseInt(x));
    x.push(arr[0]);
    y.push(arr[1]);
}
x.sort((a, b) => a - b);
y.sort((a, b) => a - b);
console.log((x[N - 1] - x[0]) * (y[N - 1] - y[0]));