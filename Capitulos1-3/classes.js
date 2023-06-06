class Book {
  constructor(title, pages, isbn) {
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
  }

  printIsbn() {
    console.log(this.isbn);
  }

  printTitle() {
    console.log(this.title);
  }

  printPages() {
    console.log(this.pages);
  }
}

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }
  printTechnology() {
    console.log(this.technology);
  }
}

class Person{
    constructor(name) {
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(valueName){
        this._name = valueName;
    }
}

let book = new Book("Percy Jackson", "340", "223344");
let jsBook = new ITBook("Learning JS", "419", "998877", "Javascript");
let person = new Person('David Ferreira');

/*
console.log(book);
console.log(jsBook);

book.printTitle();
book.printIsbn();
jsBook.printTitle();
jsBook.printTechnology();
*/

console.log(person._name);
console.log(person.name);

/*
console.log(`O nome do livro é: ${book.title}
Ele possui ${book.pages} páginas
E o seu número de série é: ${book.isbn}`);
*/


const circleArea = (r) => 3.14 * (r ** 2);
console.log(circleArea(2));
