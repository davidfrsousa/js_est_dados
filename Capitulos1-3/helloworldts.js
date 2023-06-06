var lang;
var langs = ["JS", "JAVA", "C++"];
lang = langs[0];
function printName(person) {
    console.log(person.name);
}
var john = { name: "John", age: 26 };
var mary = { name: "Mary", age: 28, phone: "61986555" };
printName(john);
printName(mary);
var MyObject = /** @class */ (function () {
    function MyObject() {
    }
    MyObject.prototype.compareTo = function (b) {
        if (this.age === b.age) {
            return 0;
        }
        return this.age > b.age ? 1 : -1;
    };
    return MyObject;
}());
