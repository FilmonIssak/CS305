function calculateSalesCommision(salary, price) {
  if (salary) {
    if (price < 300) {
      return 0;
    } 
    else if (price >= 300 && price <= 500) {
      return price * (1 / 100);
    } 
    else if (price > 500) {
      return price * (2 / 100);
    }
  } 
  else if (price >= 300 && price <= 500) {
    return price * (2 / 100);
  } 
  else if (price > 500) {
    return price * (3 / 100);
  }
   else if (price < 300) {
    return 0;
  }
}

console.log(calculateSalesCommision(true, 200));
console.log(calculateSalesCommision(false,200));
console.log(calculateSalesCommision(true,300));
console.log(calculateSalesCommision(false,300));
console.log(calculateSalesCommision(true,3500));
console.log(calculateSalesCommision(false,3500));