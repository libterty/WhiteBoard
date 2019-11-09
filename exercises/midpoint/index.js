// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
    // both slow and fast start with first first node
    let slow = list.getFirst();
    let fast = list.getFirst();

    // iterate when next node and next next node of fast isn't undefined
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // if next node or next next node of fast is undefined, slow must be at the midpoint
    return slow;
}

module.exports = midpoint;