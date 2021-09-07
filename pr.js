let user = { name: "fili", age:27}

delete user.age;
console.log(user);
user.name= "wintana"

console.log(user);

user["like me"] = true;
console.log(user);
delete user["like me"]
console.log(user["user"]);
console.log(user);