// Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

// To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

// To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

// Example 1:

// Input: [[1,1,0],[1,0,1],[0,0,0]]
// Output: [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]



function reverseArr(arr) {
  for(let i = 0; i < Math.floor(arr.length / 2); i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === 0) {
      arr[i] = 1;
    } else {
      arr[i] = 0;
    }
  }

  return arr;
}

var flipAndInvertImage = function(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = reverseArr(arr[i]);
  }
  return arr;
};