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

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };