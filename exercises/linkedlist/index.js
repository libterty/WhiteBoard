// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(data) {
        this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        // get current node
        let node = this.head;
        // while node exist increment the counter, and set to the next level node
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        // if this.head is null which means linkedlist have had any node
        if (!this.head) {
            return null;
        }
        // iterate through node existing
        while (node) {
            // if next node is null it must be the oldest node
            if (!node.next) {
                return node;
            }
            // counter--;
            node = node.next
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // if null return
        if (!this.head) {
            return;
        }
        // assgin to next element to remove first element
        this.head = this.head.next;
    }

    removeLast() {
        // if linkedlist is null should return
        if (!this.head) {
            return;
        }
        // if next null is null should return with itself eq to null
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let previous = this.head;
        let node = this.head.next;
        // if next node is exist then iterate
        while (node.next) {
            // set previous to next node
            previous = node;
            // set node to next node
            node = node.next
        }
        // if while 1 stop then should be end of length then previos.next = null
        previous.next = null;
    }
}

module.exports = { Node, LinkedList };