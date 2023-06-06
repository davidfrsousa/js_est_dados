//let daysOfWeek = new Array();
//let daysOfWeek = new Array('Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo');
//let daysOfWeek = [];

let daysOfWeek = [
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
  "Domingo",
];

//console.log(daysOfWeek.length);

for (let index = 0; index < daysOfWeek.length; index++) {
  console.log(daysOfWeek[index]);
}

const fibonacci = [];
[fibonacci[0],fibonacci[1],fibonacci[2]] = [0,1,1];

for (let index = 3; index < 20; index++) {
  fibonacci[index] = fibonacci[index - 1] + fibonacci[index - 2];
}

//console.log(fibonacci);

fibonacci[fibonacci.length] = 6765;
fibonacci.push(10946);
fibonacci.push(17711,28657);

//console.log(fibonacci);

fibonacci.unshift(-1);
fibonacci.unshift(-2, -1);

fibonacci.pop();

//console.log(fibonacci);

fibonacci.shift();

//console.log(fibonacci);

fibonacci.splice(5,3);

//console.log(fibonacci);

fibonacci.splice(5,0,2,3,5);

console.log(fibonacci);

