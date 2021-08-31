const prompt = require("prompt-sync")();

let housePrice = prompt("write the house price: ");

function calculateDownPayment(cost) {
  let rate = cost - 50000;
  if (cost >= 0 && cost < 50000) {
    return (cost * 5) / 100;
  } else if (cost >= 50000 && cost < 100000) {
     rate = cost - 50000;
    return 1000 + (rate * 10) / 100;
  } else if (cost >= 100000 && cost < 200000) {
     rate = cost - 100000;
    return 2000 + (rate * 15) / 100;
  } else if (cost >= 200000) {
    rate = cost - 200000;
    return 5000 + (rate * 10) / 100;
  }
}

console.log(calculateDownPayment(housePrice));
