
function compoundInterest(intitial, rate, time) {
    let comInt = intitial * (1 + (rate / 100) / 12) ** (12 * time);
    return comInt;

}
console.log(compoundInterest(100, 10, 1));
console.log(compoundInterest(1000, 5, 10));