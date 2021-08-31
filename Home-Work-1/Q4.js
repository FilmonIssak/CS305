// One
let num = "";
for (let i = 1; i <= 5; i++) {
  let num = "";
  for (let j = 1; j <= 5; j++) {
    num += j
  }
  console.log(num)
}



// Two

for (let i = 1; i <= 5; i++) {
  let order = "";
  for (let j = 0; j < i; j++) {
    order = order + i;
  }
  console.log(order);
}

//Three
for (let i = 5; i >= 1; i--) {
  let inOrder = "";
  for (let j = 1; j <= i; j++) {
    inOrder = inOrder + i;
  }
  console.log(inOrder);
}
