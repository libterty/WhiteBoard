// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution 1
// convert string to array then exclude characters besides vocabulary and spaces
// then compare with string and it's reverse string

function palindrome(str) {
    let pal = str.split('').filter(char => /[a-z]| */.test(char));

    return pal.join('') === pal.reverse().join('') ? true : false;
}

// solution 2
function palindrome(str) {
    let pal = str.split('').reverse().join('');

    return str === pal;
}

// solution 3
// compare all elements in an arrary from start with it's it's opposite then incrementing
function palindrome(str) {
    return str.split('').every((char, i) => char === str[str.length - i - 1])
}

module.exports = palindrome;