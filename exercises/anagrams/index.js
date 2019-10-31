// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// solution 1
// key: Anagram
// convert string to an array and sort the array
// convert array back to string and compare both string
// if both string is eq return true else return false

function anagrams(stringA, stringB) {
    let index = stringA.split('').sort((a, b) => a < b ? -1 : a > b ? 1 : 0).join('');
    let compare = stringB.split('').sort((a, b) => a < b ? -1 : a > b ? 1 : 0).join('');

    return index === compare
}

// solution 2 

function anagrams(stringA, stringB) {
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);

    // if the key is not eq it's not anagram
    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false
        }
        return true;
    }
}

function buildCharMap(str) {
    const charMap = {};

    // take out all the non vol then toLowerCase and run for loop
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

module.exports = anagrams;