const prompt = require("prompt-sync")();

let initialAmount = parseFloat(prompt("write your initial Amount: "));
let interestRate = parseFloat(prompt("write your interest rate: "));
let numberOfYears = parseFloat(prompt("write your number of years to compound: "));

function compoundInterest(amount, interest, time){
    let CompoundInterest = Math.pow(amount * (1 + (interest/12)), 12/time)  - amount;
    return CompoundInterest;
}

console.log(compoundInterest(initialAmount,interestRate,numberOfYears))