"use strict";

module.exports = {isVowel,computeSalesCommission,compoundInterest,calcDownPayment,convertFahrenheit,calcDistance};

// Question 1

/**
 * 
 * @param {string} character dispalyed input 
 * @returns {boolean} return true or false 
 */
 function isVowel(character) {
    if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
      return true;
      
    }
    return false
  }


// Question 2

/**
 * 
 * @param {boolean} salaried checks if salaried.
 * @param {Number} sale sales.
 * @returns {boolean} returns true or false.
 */
 function computeSalesCommission(salaried, sale) {
    if (salaried) {
      if (sale < 300) {
        return 0;
      } else if (sale >= 300 && sale <= 500) {
        return sale * (1 / 100);
      } else if (sale > 500) {
        return 5 + (sale - 500) * (2 / 100);
      }
    } else if (sale >= 300 && sale <= 500) {
      return sale * (2 / 100);
    } else if (sale > 500) {
      return 10 + (sale - 500) * (3 / 100);
    } else if (sale < 300) {
      return 0;
    }
  }

// Question 3

/**
 * function calculates compound interest.
 * @param {Number} init the saved amount.
 * @param {Number} tax interest rate.
 * @param {Number} duration number of years. 
 * @returns{Number} returns calculated compund interest.
 */
 function compoundInterest(init, tax, duration) {
    return init *  Math.pow(((1 +(tax / 100)/12)) , (12 * duration));
  }

// Question 4 A

/**
 * 
 * @param {number} cost cost of house 
 * @returns {number} downpayment of the house
 */
 function calcDownPayment(cost) {
    if (cost >= 0 && cost < 50000) {
      return (cost * 5) / 100;
    } else if (cost >= 50000 && cost < 100000) {
      let rate = cost - 50000;
      return 2500 + (rate * 10) / 100;
    } else if (cost >= 100000 && cost < 200000) {
      let rate2 = cost - 100000;
      return 7500 + (rate2 * 15) / 100;
    } else if (cost >= 200000) {
      let rate3 = cost - 200000;
      return 5000 + (rate3 * 10) / 100;
    }
  }

// Question 4 B

/**
 * 
 * @param {number} farenheit degree farenheit from user
 * @returns {number} degree celcius after converted 
 */
 function convertFahrenheit(farenheit) {
    return ((farenheit - 32) * 5) / 9;
  }

// Question 4 C  

/**
 * 
 * @param {number} x1 x1 Coordinate  
 * @param {number} y1 y1 Coordinate
 * @param {number} x2 x2 Coordinate
 * @param {number} y2 y2 Coordinate
 * @returns {number} the distance between those coordinates
 */
 function calcDistance(x1, y1, x2, y2) {
    
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  }



