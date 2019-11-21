// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // implement bubble sort
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    // return 
    return arr;
}

// From i = 0 to < arr.length
// Assume the element at i is the least in the array, assign i to indexOfMin
// For j from i + 1 to end to array
// See if there is an element with lower value
// If there is record its index
// If the index of the current element and the index of the lowest element is not the same swap them

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        // swap logic
        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }

    return arr;
}

// example [9, 5, 3, 10]
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    // divided arr into two
    const center = Math.floor(arr.length / 2); // mergeSort1 [9, 5, 3, 10] // mergeSort1 [9, 5] [3, 10]
    const left = arr.slice(0, center); // Left1 [9, 5] // left2 [9] [3]
    const right = arr.slice(center); // right1 [3, 10] // right2 [5] [10]
    // recursion 
    // passing Left1 && Right1 then recurse
    // pasing Left2 && Right2 then recurse then length === 1
    // call merge function
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    // create a results array
    const result = [];

    // while there are still in both arrarys
    while (left.length && right.length) {
        // if the first element at the left half is less then first at the right
        if (left[0] < right[0]) {
            // shift the element from left into result arr
            result.push(left.shift());
        } else {
            // else shift the right into result arr
            result.push(right.shift());
        }
    }
    // take everything from the array the still has stuff in it and put it in results
    return [...result, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };