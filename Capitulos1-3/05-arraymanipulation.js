// Joining arrays
/*const zero = 0;
const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log(numbers);*/

// Function iterator
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//const isEven = (x) => x % 2 === 0;
//numbers.every(isEven);
//numbers.some(isEven);
//numbers.forEach(x => console.log(x % 2 === 0));
//const myMap = numbers.map(isEven);
//const myFilter = numbers.filter(isEven);
//const sum = numbers.reduce((current, next) => current + next);
//console.log(numbers.findIndex(x => x ===7));
/*for(const n of numbers){
    console.log(n % 2 === 0? 'even':'odd');
}*/
/*let iterator = numbers[Symbol.iterator]();
for (const n of iterator) {
    console.log(n);
}*/
/*let nEntries = numbers.entries();
for (const n of nEntries) {
    console.log(n);
}*/
/*
let nKeys = numbers.keys();
console.log(nKeys.next());
console.log(nKeys.next());
console.log(nKeys.next());
*/
/*
let nValues = numbers.values();
console.log(nValues.next());
console.log(nValues.next());
console.log(nValues.next());
*/
/*
let numbers2 = Array.from(numbers);
console.log(numbers2);
let evens = Array.from(numbers, x => (x % 2 ===0));
console.log(evens);
*/
/*
let numbers2 = Array.of(1,2,3,4);
let numbers3 = Array.of(...numbers2);
numbers3.fill(0);
numbers3.fill(2,1);
numbers3.fill(1,2,4);
console.log(numbers3);
let sixArray = Array(6).fill(0);
console.log(sixArray);
*/
/*
numbers.reverse();
numbers.sort((a,b) => a - b);
console.log(numbers);

const friends = [
    {name: 'John', age: 30},
    {name: 'Mary', age: 25},
    {name: 'Bob', age: 20}
];

function comparePerson(a, b){
    if(a.age < b.age) return -1;
    if(a.age < b.age) return 1;
    return 0;
}
console.log(friends.sort(comparePerson));
*/

//const names = ["Ana", "ana", "john", "John"];
//console.log(names.sort((a, b) => a.localeCompare(b)));

//numbers.push(10);
//console.log(numbers.indexOf(10));
//console.log(numbers.indexOf(100));

/*
function multipleOf13(element, index, array){
    return (element % 13 === 0);
}
console.log(numbers.includes(9));
console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));
console.log(numbers.join(', '));
*/
/*
let length = 5;
let int16 = new Int16Array(length);

let array16 = [];
array16.length = length;

for(let i = 0; i < length; i++){
    int16[i] = i+1;
}
console.log(int16);
console.log(array16);
*/

