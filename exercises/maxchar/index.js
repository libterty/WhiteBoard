// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    // convert string to a key-value pair, set vol as key set repeat times as it's value
    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    // comparing the object with it's key value pair, if it's value is greater then init max or previous max
    // set obj key as maxChar
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;