class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  add(element) {
    this.items[this.count] = element;
    this.count++;
  }
  remove() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  size() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }
  clear() {
    while(!this.isEmpty()){
        this.remove();
    }
    return 0;
  }

  toString(){
    if(this.isEmpty()){
        return '';
    }
    let objString = `${this.items[0]}`;
    for(let i = 1; i < this.count; i++){
        objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }

  //METHODS PUSH, POP, ISEMPTY, PEEK, CLEAR, SIZE, TOSTRING
}

const stack = new Stack();
stack.add(5);
stack.add(8);
stack.add(11);
stack.add(15);
stack.isEmpty();
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
/*stack.add(5);
stack.add(8);
stack.add(11);
stack.add(15);
//console.log(stack.clear());
console
console.log(stack.toString());
*/

