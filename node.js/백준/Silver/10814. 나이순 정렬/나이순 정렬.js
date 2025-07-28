var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
input.shift();
const arr = input.map((x, i) => {
    const _arr = x.split(" ").concat([i]);
    _arr[0] = parseInt(_arr[0]);
    return _arr;
});
arr.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[2] - b[2]);
console.log(arr.map(x => `${x[0]} ${x[1]}`).join("\n"));