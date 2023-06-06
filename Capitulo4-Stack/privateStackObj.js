class Stack{
    #item;
    #count;
    constructor() {
        this.#count = 0;
        this.#item = {};
    }
    isEmpty(){
        return this.#count === 0;
    }
    add(element){
        this.#item[this.#count] = element;
        this.#count++;
    }
    remove(){
        if(this.isEmpty()){
            return undefined;
        }
        this.#count--;
        const r = this.#item[this.#count];
        delete this.#item[this.#count];
        return r;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.#item[this.#count - 1];
    }
    size(){
        return this.#count;
    }
    clear(){
        while(!this.isEmpty()){
            this.remove();
        }
        return 0;
    }
    toString(){
        if(this.isEmpty()){
            return '{}';
        }
        let objString = this.#item[0];
        for(let i = 1; i < this.#count; i++){
            objString = `${objString},${this.#item[i]}`;
        }
        return objString;
    }
}

const stack = new Stack();
stack.add(4);
stack.add(8);
stack.add(12);
stack.add(15);
stack.add(18);
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.remove());
console.log(stack.peek());
console.log(stack.toString());
//console.log(stack.clear());
//console.log(stack.isEmpty());
//console.log(stack.toString());