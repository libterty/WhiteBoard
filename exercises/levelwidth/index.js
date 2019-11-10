// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    // init an array with root and 's'
    const arr = [root, 's']
        // init counter represent width
    const counter = [0];
    // while arr.length greater then 1
    while (arr.length > 1) {
        // shift the First node
        const node = arr.shift();
        // if node is eq to 's', means we are at the end of the width
        if (node === 's') {
            // increment to next level width
            counter.push(0);
            // push it back to arr
            arr.push('s')
        } else {
            // push children node
            arr.push(...node.children);
            // increment counter
            counter[counter.length - 1]++;
        }
    }
    return counter;
}

module.exports = levelWidth;