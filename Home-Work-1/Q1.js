const prompt = require("prompt-sync")();
let salary = prompt("what is your salary type: ");
let sale = parseInt(prompt("enter the amount of amount: "));

function computeamounts(salar, amount) {
  if (salar === "salaried") {
    if (amount <= 300) {
      return "No commision";
    } else if (amount > 300 && amount < 500) {
      return amount * (1 / 100);
    } else if (amount >= 500) {
      return amount * (2 / 100);
    }
  } else {
    if (amount > 300 && amount < 500) {
      return amount * (2 / 100);
    } else if (amount >= 500) {
      return amount * (3 / 100);
    }
  }
}

console.log(computeamounts(salary, sale))




