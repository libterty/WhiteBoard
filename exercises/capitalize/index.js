// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// solution 1
// convert string to array and check if the vol have spcae
// if yes convert first letter to uppercase
// return 

// function capitalize(str) {
//     let tmp = str.split('');

//     tmp[0] = tmp[0].toUpperCase();

//     for (let i = 0; i < tmp.length; i++) {
//         if (tmp[i] === ' ') {
//             tmp[i + 1] = tmp[i + 1].toUpperCase();
//         }
//     }

//     return tmp.join('');
// }

// solution 2
// create an empty array to store str
// iterator the str array, then uppercase every first letter plus adding back it's rest 
// return as a string

function capitalize(str) {
    const words = [];

    for (let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    return words.join(' ');
}

// solution 3
// create result which first character is capitalized
// if the character is at left of the space then capitalize and add it
// else add it

function capitalize(str) {
    let result = str[0].toUpperCase();

    for (let i = 1; i < str.length; i++) {
        str[i - 1] === ' ' ? result += str[i].toUpperCase() : result += str[i];
    }

    return result;
}

module.exports = capitalize;