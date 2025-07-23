var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
const dial = ["", "", "", "C", "F", "I", "L", "O", "S", "V", "Z"];
let result = 0;
for (let i = 0; i < input.length; i++) {
    let j;    
    for (j = 3; j < dial.length; j++) {
      if (input[i] <= dial[j]) break;
    }
    result += j;
}
console.log(result);
