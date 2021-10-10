"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(val) {
        this.val = val;
        this.next = null;
    }
    return LinkedListNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }
    SinglyLinkedList.prototype.push = function (val) {
        var node = new LinkedListNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.count += 1;
        return this;
    };
    SinglyLinkedList.prototype.pop = function () {
        if (!this.head)
            return undefined;
        var current = this.head;
        var prev = this.head;
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
    };
    SinglyLinkedList.prototype.shift = function () {
        if (!this.head)
            return undefined;
        var temp = this.head;
        this.head = this.head.next;
        this.count -= 1;
        if (this.count === 0) {
            this.head = null; // not required as if it was only 1 node in the list, this.head would be null anyway
            this.tail = null;
        }
        return temp;
    };
    SinglyLinkedList.prototype.unshift = function (val) {
        var node = new LinkedListNode(val);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.count += 1;
        return this;
    };
    SinglyLinkedList.prototype.get = function (index) {
        if (index < 0 || index >= this.count)
            return null;
        var current = this.head;
        for (var i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    };
    SinglyLinkedList.prototype.set = function (index, value) {
        var node = this.get(index);
        if (!node)
            return false;
        node.val = value;
        return true;
    };
    SinglyLinkedList.prototype.insert = function (index, val) {
        if (index < 0 || index > this.count)
            return false;
        if (index === this.count) {
            return !!this.push(val);
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        var node = new LinkedListNode(val);
        var insertAfter = this.get(index - 1);
        var temp = insertAfter.next;
        insertAfter.next = node;
        node.next = temp;
        this.count += 1;
        return true;
    };
    SinglyLinkedList.prototype.remove = function (index) {
        if (index < 0 || index >= this.count)
            return undefined;
        if (index === 0)
            return this.shift();
        if (index === this.count - 1)
            return this.pop();
        var prevNode = this.get(index - 1);
        var removed = prevNode.next;
        prevNode.next = removed.next;
        this.count -= 1;
        return removed;
    };
    SinglyLinkedList.prototype.reverse = function () {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var nextNode;
        var prev = null;
        for (var i = 0; i < this.count; i++) {
            nextNode = node.next;
            node.next = prev;
            prev = node;
            node = nextNode;
        }
        this.print(); // for test purpose
        return this;
    };
    // below method is just for testing purposes.
    SinglyLinkedList.prototype.print = function () {
        var arr = [];
        var cur = this.head;
        while (cur) {
            arr.push(cur.val);
            cur = cur.next;
        }
        console.log(arr);
    };
    Object.defineProperty(SinglyLinkedList.prototype, "length", {
        // Methods required by interface
        get: function () {
            return this.count;
        },
        enumerable: false,
        configurable: true
    });
    SinglyLinkedList.prototype.swap = function (i, j) {
        var rightVal = this.get(j).val;
        var leftVal = this.get(i).val;
        this.set(i, rightVal);
        this.set(j, leftVal);
    };
    SinglyLinkedList.prototype.compare = function (i, j) {
        return this.get(i).val > this.get(j).val;
    };
    return SinglyLinkedList;
}());
exports.SinglyLinkedList = SinglyLinkedList;
