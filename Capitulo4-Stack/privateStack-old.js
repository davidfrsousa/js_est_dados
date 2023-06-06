const items = new WeakMap();
class Stack {
  constructor() {
    items.set(this, []);
  }

  push(element) {
    const s = items.get(this);
    s.push(element);
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    const s = items.get(this);
    const r = s.pop();
    return r;
  }
  size() {
    return items.get(this).length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return items.get(this)[this.size() - 1];
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
    let objString = `${items.get(this)[0]}`;
    for (let i = 1; i < this.size(); i++) {
      objString = `${objString},${items.get(this)[i]}`;
    }
    return objString;
  }
  print() {
    console.log(items.get(this));
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
