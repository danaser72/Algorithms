var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
input.shift();
input.sort((a, b) => {
    const _a = a.split(" ").map(x => parseInt(x));
    const _b = b.split(" ").map(x => parseInt(x));
    return _a[0] !== _b[0] ? _a[0] - _b[0] : _a[1] - _b[1];
});
console.log(input.join("\n"));