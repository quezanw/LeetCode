/*
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

 

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
*/



/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  let arr = [];
  for(let k = 0; k < A[0].length; k++) {
    arr.push([]);
  }
  for(let i = 0; i < A.length; i++) {
    for(let j = 0; j < A[i].length; j++) {
      arr[j][i] = A[i][j];
    }
  }
  return arr;
};


//  1 2 3
//  4 5 6
//  7 8 9

//  1 4 7
//  2 5 8
//  3 6 9
