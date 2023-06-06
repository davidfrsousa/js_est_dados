import Node from "../models/linked-list-models.js";

export default class DoublyNode extends Node {
  constructor(element, next, prev) {
    super(element, next);
    this.prev = prev;
  }
}
