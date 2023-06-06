export default class Deque {
  #count;
  #items;
  #lowestCount;
  constructor() {
    this.#count = 0;
    this.#lowestCount = 0;
    this.#items = {};
  }
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.#lowestCount > 0) {
      this.#lowestCount--;
      this.#items[this.#lowestCount] = element;
    } else {
      for (let i = this.#count; i > 0; i--) {
        this.#items[i] = this.#items[i - 1];
      }
      this.#count++;
      this.#lowestCount = 0;
      this.#items[0] = element;
    }
  }
  addBack(element) {
    this.#items[this.#count] = element;
    this.#count++;
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const r = this.#items[this.#lowestCount];
    delete this.#items[this.#lowestCount];
    this.#lowestCount++;
    return r;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.#count--;
    const r = this.#items[this.#count];
    delete this.#items[this.#count];
    return r;
  }
  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#lowestCount];
  }
  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#items[this.#count - 1];
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    while (!this.isEmpty()) {
      this.removeBack();
    }
    return 0;
  }
  size() {
    return this.#count - this.#lowestCount;
  }
  toString() {
    if (this.isEmpty()) {
      return "{}";
    }
    let objString = `${this.#items[this.#lowestCount]}`;
    for (let i = this.#lowestCount + 1; i < this.#count; i++) {
      objString = `${objString},${this.#items[i]}`;
    }
    return objString;
  }
}

/*
const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('David');
deque.addBack('Sheila');
console.log(deque.toString());
deque.addBack('Vini');
console.log(deque.toString());
console.log(deque.size());
console.log(deque.isEmpty());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
deque.addFront('David');
console.log(deque.toString());
*/