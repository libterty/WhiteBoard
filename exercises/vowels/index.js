// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// solution 1

function vowels(str) {
    // create an arr contains all the vowels
    const vow = ['a', 'e', 'i', 'o', 'u'];
    // create a counter
    let count = 0;

    // iterator through all vows
    vow.map(item => {
        // iterator through all characters with each vowel
        str.toLowerCase().split('').filter(char => {
            if (char === item) {
                count++;
            }
        })
    });

    return count;
}

// solution 2 

function vowels(str) {
    let count = 0;
    const checker = 'aeiou';

    for (let char of str.toLowerCase()) {
        if (checker.includes(char)) {
            count++;
        }
    }

    return count;
}

// solution 3

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

module.exports = vowels;