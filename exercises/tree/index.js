// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        this.children.push(new Node(data));
    }

    remove(data) {
        this.children = this.children.filter(el => {
            return el.data !== data;
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        // init array with the topest data;
        const arr = [this.root];
        // while arr has elements
        while (arr.length) {
            // FIFO
            const node = arr.shift();
            // then push it's children
            arr.push(...node.children);
            // recursion
            fn(node);
        }
    }

    traverseDF(fn) {
        // init array with the topest data;
        const arr = [this.root];
        // while arr has elements
        while (arr.length) {
            // FIFO
            const node = arr.shift();
            // then unshift it's children
            arr.unshift(...node.children);
            // recursion
            fn(node);
        }
    }
}

module.exports = { Tree, Node };