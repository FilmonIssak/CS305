"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree, sum, multiply, findLongestWord,reverseArray,reverseArrayInPlace,scoreExams }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
 function maxOfThree(a, b, c) {
    if (a >= b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else {
      return c;
    }
  }

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
 function sum(arr) {
    let sum = 0;
    for (let a of arr) {
      sum += a;
    }
    return sum;
  }


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
 function multiply(arr) {
    let mul = 1;
    for (let key of arr) {
      mul *= key;
    }
    return mul;
  }

  /**
 *
 * @param {Array} arr of strings
 * @returns{number} length of longest srting in arr
 */
function findLongestWord(arr) {
    let longest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longest.length) {
        longest = arr[i];
      }
    }
    return longest.length;
  }


  /**
 *
 * @param {Array} arr
 * @returns {Array} arr in reverse
 */
function reverseArray(arr) {
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      revArr.push(arr[i]);
    }
    return revArr;
  }

  

  /**
 *
 * @param {Array} arr in reverse
 * @returns {Array} modifies the reversed arr
 */
function reverseArrayInPlace(arr) {
    let modArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      modArr.push(arr[i]);
    }
    return modArr;
  }


  /**
 *
 * @param {Array} arr of arrays
 * @param {Array} correctAnswers
 * @returns {Array} count of the correct answers
 */
function scoreExams(arr, correctAnswers) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] == correctAnswers[j]) {
          count++;
        }
      }
      newArr.push(count);
    }
    return newArr;
  }