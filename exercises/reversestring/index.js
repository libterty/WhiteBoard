// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution 1
// convert string to array then reverse entire array and join back to string

function reverse(str) {
    return str.split('').reverse().join('');

}

// solution 2
// create a variable contains the for each character in the string then return the string

function reverse(str) {
    let reversed = '';

    for (let char of str) {
        reversed = char + reversed;
    }

    return reversed;
}

// solution 3
// convert string into array then use reduce with es6 syntax than back to init string

function reverse(str) {
    return str.split('').reduce((reversed, char) => char + reversed, '')
}

module.exports = reverse;