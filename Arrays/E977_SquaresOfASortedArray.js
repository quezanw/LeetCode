// Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

var sortedSquares = function(A) {
  return A.map(val => Math.pow(val,2)).sort((a,b) =>  a - b);
};

// Possible to do in O(n) time
function sortedSquares2() {

}