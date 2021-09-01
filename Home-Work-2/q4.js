 // one
 function sumDigits(quotient){
     let sum = 0;
     while(quotient > 0){
         let reminder = quotient % 10;
         sum = sum + reminder;
         quotient = Math.floor(num / 10);
     }
     return sum;
 }
console.log(sumDigits(1234));
console.log(sumDigits(102));
console.log(sumDigits(8));
 
 // two
 function multiplyDigits(quotient){
    let multi = 1;
    while(quotient > 1){
        let reminder = quotient % 10;
        multi = (multi) * reminder;
        quotient = Math.floor (num / 10);
      
    }
    return multi;
 }
 console.log(multiplyDigits(1234));
 console.log(multiplyDigits(102));
 console.log(multiplyDigits(8));

