var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
for (let t = 1; t < input.length; t++) {    
    const arr = input[t].trim().split(" ");
    let result = "";
    for (let u = 0; u < arr[1].length; u++) {
        for (let v = 0; v < parseInt(arr[0]); v++) {
            result += arr[1][u];
        }
    }
    console.log(result);
}