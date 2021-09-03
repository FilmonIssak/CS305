// let week = ["monday", "tuesday", "wednsday"];
// console.log([week[1]]);

// const scores = [];
// for (let i=0; i<10; i++){
// scores[i] = Math.ceil(Math.random()*100);
// }
// console.log(scores);






write a function named findAverage, that takes an array as an
argument and return average of the array values.

const grades = [80, 77, 88, 95, 68];

function findAvg(average) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}

const average = getAvg(grades);
console.log(average);