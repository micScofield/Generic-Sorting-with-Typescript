import { Sorter } from "./sorter";

class LinkedListNode {
  next: LinkedListNode | null;

  constructor(public val: number) {
    this.next = null;
  }
}

export class SinglyLinkedList extends Sorter {
  head: LinkedListNode | null;
  tail: LinkedListNode | null;
  count: number;

  constructor() {
    super();
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: number) {
    let node = new LinkedListNode(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail!.next = node;
      this.tail = node;
    }
    this.count += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let prev = this.head;
    while (current) {
      if (current.next === null) {
        prev.next = null;
        this.tail = prev;
        this.count -= 1;

        if (this.count === 0) {
          this.head = null;
          this.tail = null;
        }

        return current;
      }
      prev = current;
      current = current.next;
    }
    // quick note: If we were using doubly linked list, we would directly have access to tail's previous node, and popping would be O(1) instead of O(n).
  }

  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    this.count -= 1;

    if (this.count === 0) {
      this.head = null; // not required as if it was only 1 node in the list, this.head would be null anyway
      this.tail = null;
    }

    return temp;
  }

  unshift(val: number) {
    let node = new LinkedListNode(val);

    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.count += 1;

    return this;
  }

  get(index: number) {
    if (index < 0 || index >= this.count) return null;

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current!.next;
    }

    return current;
  }

  set(index: number, value: number) {
    let node = this.get(index);

    if (!node) return false;

    node.val = value;
    return true;
  }

  insert(index: number, val: number) {
    if (index < 0 || index > this.count) return false;

    if (index === this.count) {
      return !!this.push(val);
    }

    if (index === 0) {
      return !!this.unshift(val);
    }

    let node = new LinkedListNode(val);

    let insertAfter = this.get(index - 1);

    let temp = insertAfter!.next;
    insertAfter!.next = node;
    node.next = temp;

    this.count += 1;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index >= this.count) return undefined;

    if (index === 0) return this.shift();

    if (index === this.count - 1) return this.pop();

    let prevNode = this.get(index - 1);
    let removed = prevNode!.next;
    prevNode!.next = removed!.next;

    this.count -= 1;
    return removed;
  }

  reverse() {
    if (!this.head) return undefined;

    let node = this.head;

    this.head = this.tail;
    this.tail = node;

    let nextNode;
    let prev = null;

    for (let i = 0; i < this.count; i++) {
      nextNode = node.next;
      node.next = prev;
      prev = node;
      if (!nextNode) return "Something Went Wrong !!!";
      node = nextNode;
    }

    this.print(); // for test purpose

    return this;
  }

  // below method is just for testing purposes.
  print() {
    let arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    console.log(arr);
  }

  // Methods required by interface

  get length(): number {
    return this.count;
  }

  swap(i: number, j: number): void {
    let rightVal = this.get(j)!.val;
    let leftVal = this.get(i)!.val;

    this.set(i, rightVal);
    this.set(j, leftVal);
  }

  compare(i: number, j: number): boolean {
    return this.get(i)!.val > this.get(j)!.val;
  }
}
