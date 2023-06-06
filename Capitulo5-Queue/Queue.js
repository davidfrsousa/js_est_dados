export default class Queue {
  #item;
  #count;
  #lowestCount;
  constructor() {
    this.#count = 0;
    this.#item = {};
    this.#lowestCount = 0;
  }

  enqueue(element) {
    this.#item[this.#count] = element;
    this.#count++;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const r = this.#item[this.#lowestCount];
    delete this.#item[this.#lowestCount];
    this.#lowestCount++;
    return r;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.#item[this.#lowestCount];
  }
  isEmpty() {
    return this.size() === 0;
  }
  size(){
    return (this.#count - this.#lowestCount);
  }
  clear(){
    while(!this.isEmpty()){
        this.dequeue();
    }
    return 0;
  }
  toString(){
    if(this.isEmpty()){
        return '{}';
    }
    let objString = `${this.#item[this.#lowestCount]}`;
    for(let i = this.#lowestCount+1; i < this.#count; i++){
        objString = `${objString},${this.#item[i]}`;
    }
    return objString;
  }

  // ENQUEUE, DEQUEUE, PEEK, ISEMPTY, SIZE
}

/*
const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue('David');
queue.enqueue('Sheila');
console.log(queue.toString());
queue.enqueue('Vini');
console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
queue.dequeue();
console.log(queue.toString());
queue.dequeue();
console.log(queue.size());
console.log(queue.toString());
*/