// Input:
// matrix = [
//   [1,2,3,4],
//   [5,1,2,3],
//   [9,5,1,2]
// ]
// Output: True
// Explanation:
// In the above grid, the diagonals are:
// "[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
// In each diagonal all elements are the same, so the answer is True.


// Brute Force Approach
// O(N * M) where M is the number of rows and N is the number of columns
var isToeplitzMatrix = function(matrix) {
  for(let y = 1; y < matrix.length; y++) {
    for(let x = 0; x < matrix[y - 1].length - 1; x++) {
      if(matrix[y - 1][x] !== matrix[y][x + 1]) {
        return false;
      }
    }
  }
  return true;
};