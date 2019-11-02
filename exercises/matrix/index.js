// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// solution 1

// rules are first col set are eq to n and start after to descending when it changes direction
// after every two directions number you to insert into array drop 1

function matrix(n) {
    // create empty array of matrix 
    let results = [];
    // create a counter starting at 1
    let counter = 1;
    let row = 0;
    let endRow = n - 1;
    let col = 0;
    let endCol = n - 1;

    // create a sub arrays in array
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    // As long as (start col <= end col) && (start row <= end row)
    while (col <= endCol && row <= endRow) {
        // Top row 
        for (let i = col; i <= endCol; i++) {
            results[row][i] = counter;
            counter++;
        }
        row++;

        for (let i = row; i <= endRow; i++) {
            results[i][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= col; i--) {
            results[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let i = endRow; i >= row; i--) {
            results[i][col] = counter;
            counter++
        }
        col++;
    }
    console.log(results);
    return results;
}

module.exports = matrix;