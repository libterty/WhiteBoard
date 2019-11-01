// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// solution 1 recursion

function pyramid(n, row = 0, level = '') {
    // central rule according to the logic
    const mid = Math.floor((2 * n - 1) / 2);
    let add;
    // avoid endless loop
    if (n === row) {
        return;
    }
    // check column if it reaches it's max length
    if (n * 2 - 1 === level.length) {
        console.log(level);
        // increment row
        return pyramid(n, row + 1);
    }
    // mid logic to identify where to add the #
    if (mid - row <= level.length && mid + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    // recurse increment column
    pyramid(n, row, level + add);
}

// solution 2

// function pyramid(n) {
//     const mid = Math.floor((2 * n - 1) / 2);
//     // iterate through rows
//     for (let row = 0; row < n; row++) {
//         let level = '';
//         // iterate through columns
//         for (let col = 0; col < n * 2 - 1; col++) {
//             if (mid - row <= col && mid + row >= col) {
//                 level += '#';
//             } else {
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }

module.exports = pyramid;