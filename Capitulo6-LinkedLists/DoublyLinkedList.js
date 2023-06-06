import defaultEquals from "../util/util.js";
import LinkedList from './LinkedList.js';
import DoublyNode from "./DoublyNode.js";

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        }else{
            node.next = this.head;
            current.prev = node;
            this.head = node;
        }
      } else if(index === this.count){
        current = this.tail;
        current.next = node;
        node.prev = current;
        this.tail = node;
      }else{
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        node.next = current;
        previous.next = node;
        current.prev = node;
        node.prev = previous;
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index){
    if(index >= 0 && index < this.count){
        let current = this.head;
        if(index === 0){
            this.head = current.next;
            if(this.count === 1){
                this.tail = undefined;
            }else{
                this.head.prev = undefined;
            }
    
        }else if(index === this.count - 1){
            current = this.tail;
            this.tail = current.prev;
            this.tail.next = undefined;
        }else{
            current = this.getElementAt(index);
            const previous = current.prev;
            previous.next = current.next;
            current.next.prev = previous;
        }
        this.count--;
        return current.element;
    }
    return undefined;
  }
}

const doublyList = new DoublyLinkedList();
doublyList.insert(5,0);
doublyList.insert(99,1);
doublyList.insert(66,2);
doublyList.insert(577,3);
doublyList.push(101);
console.log(doublyList.isEmpty());
doublyList.removeAt(3);
console.log(doublyList.toString());

