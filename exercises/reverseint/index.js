// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// solution 1
// conver int to string then array to check if the int is  positive or negative
// if it's negative then take out from array then filter out all leading 0 then reverse back to int
// if it's positive then take out leading 0 then reverse back to int

function reverseInt(n) {
    let reverse = n.toString().split('')

    if (n < 0) {
        let tmp = reverse.splice(0, 1).join('');
        return Number(tmp + reverse.filter(item => item !== "0").reverse().join(''))
    } else {
        return Number(reverse.filter(item => item !== "0").reverse().join(''))
    }
}

// solution 2
// first handle int to string than to reverse array then back to string
// second check origin n is less or greater than 0
// return int

function reverseInt(n) {
    const reverse = n.toString().split('').reverse().join('');

    if (n < 0) {
        return parseInt(reverse) * -1;
    } else {
        return parseInt(reverse)
    }
}

module.exports = reverseInt;