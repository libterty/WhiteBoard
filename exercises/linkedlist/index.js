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
        this.insertAt(data, 0);
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
        return this.getAt(0);
    }

    getLast() {
        // let node = this.head;
        // // if this.head is null which means linkedlist have had any node
        // if (!this.head) return null;
        // // iterate through node existing
        // while (node) {
        //     // if next node is null it must be the oldest node
        //     if (!node.next) {
        //         return node;
        //     }
        //     // counter--;
        //     node = node.next
        // }
        return this.getAt(this.size() - 1);
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        // if null return
        if (!this.head) return;
        // assgin to next element to remove first element
        this.head = this.head.next;
    }

    removeLast() {
        // if linkedlist is null should return
        if (!this.head) return;
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

    /**
     * 
     * @param {obj} data 
     */
    insertLast(data) {
        const last = this.getLast();
        if (last) {
            // There are some existing node in chain
            last.next = new Node(data);
        } else {
            // The chain is empty
            this.head = new Node(data);
        }
    }

    /**
     * 
     * @param {int} n 
     */
    getAt(n) {
        if (!this.head) return null;
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === n) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    /**
     * 
     * @param {int} n 
     */
    removeAt(n) {
        if (!this.head) return;

        if (n === 0) {
            // remove element by assign to next
            this.head = this.head.next;
            return;
        }

        const previous = this.getAt(n - 1);
        if (!previous || !previous.next) return;
        // remove next by calling it's next next
        previous.next = previous.next.next;
    }

    /**
     * 
     * @param {obj} data 
     * @param {int} n 
     */
    insertAt(data, n) {
        if (!this.head) {
            this.head = new Node(data);
            return;
        }

        if (n === 0) {
            this.head = new Node(data, this.head);
            return;
        }

        // get the place to insert element, and handle edge case where ths.getAt is false
        const pre = this.getAt(n - 1) || this.getLast();
        // create new node in place
        const node = new Node(data, pre.next);
        // reassign this.head to insert element
        pre.next = node;
    }

    forEach(fn) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fn(node, counter);
            node = node.next;
            counter++;
        }
    }

    *
    [Symbol.iterator]() {
        let node = this.head;
        while (node) {
            yield node;
            node = node.next;
        }
    }
}

module.exports = { Node, LinkedList };