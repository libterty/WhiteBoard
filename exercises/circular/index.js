// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
    // both start at first node
    let slow = list.getFirst();
    let fast = list.getFirst();
    // iterate when next node or next next node is defined
    while (fast.next && fast.next.next) {
        // incrementing
        slow = slow.next;
        fast = fast.next.next;
        // if slow and fast are eq must be circular
        if (slow === fast) return true;
    }
    // if fast.next or fast.next.next is null must not be circular
    return false;
}

module.exports = circular;