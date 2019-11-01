// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// solution 1

function steps(n) {
    // iterate through rows
    for (let row = 0; row < n; row++) {
        let stair = '';
        // iterate through columns
        for (let col = 0; col < n; col++) {
            // obersving # rule, when col[i] is less than row[i] will add # in stair
            // else add space in stair
            col <= row ? stair += '#' : stair += ' ';
        }

        console.log(stair);
    }
}

// solution 2
// Recursion
// start from first row to avoid infinit loop
function steps(n, row = 0, stair = '') {
    // if row eq n then we have finished the problem
    if (n === row) {
        return;
    }
    // if the stair string length is eq to n then we are at the end of the row
    if (n === stair.length) {
        console.log(stair);
        // increment row
        return steps(n, row + 1);
    }
    // if the length of the stair length is less or eq to row, adding # else adding space
    stair.length <= row ? stair += '#' : stair += ' ';
    // recurse
    steps(n, row, stair);
}

module.exports = steps;