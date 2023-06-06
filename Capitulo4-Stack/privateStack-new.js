class Stack {
  #item;
  constructor() {
    this.#item = [];
  }

  push(element) {
    this.#item.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const r = this.#item.pop();
    return r;
  }
  size() {
    return this.#item.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#item[this.size() - 1];
  }
  clear() {
    while (!this.isEmpty()) {
      this.pop();
    }
    return 0;
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    let objString = `${this.#item[0]}`;
    for (let i = 1; i < this.size(); i++) {
      objString = `${objString},${this.#item[i]}`;
    }
    return objString;
  }
  print() {
    console.log(this.#item);
  }
}

const stack = new Stack();
stack.push(1);
stack.push(5);
stack.push(5);
stack.pop();
stack.push(8);
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.size());
//stack.clear();
stack.print();
console.log(stack.toString());
