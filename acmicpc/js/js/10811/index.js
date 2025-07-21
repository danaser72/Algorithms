var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var NM = input[0].split(" ").map(x => parseInt(x));
var result = new Array(NM[0]).fill(0).map((x, i) => i + 1);
for (let i = 1; i < input.length; i++){
    var arr = input[i].split(" ").map(x => parseInt(x) - 1);
    for (let j = 0; j <= (arr[1] - arr[0]) / 2; j++ ) {
        let tmp = result[arr[0] + j];
        result[arr[0] + j] = result[arr[1] - j];
        result[arr[1] - j] = tmp;
    }
}
console.log(result.join(" "));