// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Solution 1
// Create a tmp arr to hold chunks
// For each element in the unchunked array
// Retrieve the last element in chunked
// if last element doesnt exist or it's length is equal to chunk size
// Push a new chunk into chunked with current element
// else add current element into chunk

// function chunk(array, size) {
//     let tmp = [];
//     if (array.length < size) return tmp.push(array);

//     for (let element of array) {
//         const last = tmp[tmp.length - 1];
//         console.log(last)
//         if (!last || last.length === size) {
//             tmp.push([element]);
//         } else {
//             last.push(element);
//         }
//     }

//     return tmp;
// }

// solution 2
// using slice

function chunk(array, size) {
    let tmp = [];
    let index = 0;

    while (index < array.length) {
        tmp.push(array.slice(index, index + size));
        index += size;
    }

    return tmp;
}

module.exports = chunk;