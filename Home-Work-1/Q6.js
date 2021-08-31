const prompt = require("prompt-sync")();

let int = parseInt(prompt("write your number: "));

function sumDigits(input) {
  let sum = 0;
  while (input > 0) {
    let reminder = input % 10;
    sum = sum + reminder;
    input = Math.floor(input / 10);
  }
  return sum;
}

console.log(sumDigits(int));
