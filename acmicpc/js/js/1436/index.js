var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
let N = parseInt(input);
for (let i = 0; i < 2666800; i++) {
  if (i.toString().indexOf("666") >= 0) {
    N--;
    if (N === 0) {
      console.log(i);
      break;
    }
  }
}
