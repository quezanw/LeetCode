// Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

// Example 1:

// Input: [1,4,3,2]

// Output: 4
// Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).

var arrayPairSum = function(nums) {
  let arr = nums.sort((a, b) => a - b );
  let sum = 0;
  for(let i = 0; i < arr.length; i+=2) {
    sum += Math.min(arr[i], arr[i+1]);
  }
return sum;
};