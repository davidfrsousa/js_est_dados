let lang: string;
let langs = ["JS", "JAVA", "C++"];
lang = langs[0];

interface Person {
  name: string;
  age: number;
}

function printName(person: Person) {
  console.log(person.name);
}

const john = { name: "John", age: 26 };
const mary = { name: "Mary", age: 28, phone: "61986555" };

printName(john);
printName(mary);

interface Comparable<T> {
  compareTo(b: T): number;
}

class MyObject implements Comparable<MyObject> {
  age: number;

  compareTo(b): number{
    if(this.age === b.age){
        return 0;
    }
    return this.age > b.age? 1 : -1;
  }
}

interface Person{
  name: string,
  age: number
}

const friends: Person[] = [{name: 'John', age: 30},{name: 'Mary', age: 28}];

function comparePerson(a: Person, b: Person){
  if(a.age > b.age) return 1;
  if(a.age < b.age) return -1;
  return 0;
}