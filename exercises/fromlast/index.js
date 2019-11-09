// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slow = list.getFirst();
    let fast = list.getFirst();
    // iterate first when given n 
    for (let i = 0; i <= n; i++) {
        fast = fast.next
    }
    // increment slow
    slow = slow.next;
    // if next node is exist
    while (fast.next) {
        // increment both
        slow = slow.next;
        fast = fast.next;
    }
    // if not exist then slow is the return value
    return slow;
}

module.exports = fromLast;