const prompt = require("prompt-sync")();

// While Version
let age = prompt("write your age: ");

while(age <= 18){
     age = prompt("write your age: "); 
}

//Do while Version

do{
    age = prompt("write your age: ");
}

while(age <= 18){
console.log("you are 18")
}