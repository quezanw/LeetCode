// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.


// Brute Force O(n^2)

var maxSubArray = function(nums) {
  let sum = 0;
  let max = nums[0];
  for(let i = 0; i < nums.length; i++) {
    for(let j = i; j < nums.length; j++) {
      sum += nums[j];
      if(sum > max) {
         max = sum;
      }
    }
    sum = 0;
  }
  return max;
};

// Divide and Conquer n log n

function maxSubarray(arr) {

}

// Kadane algo O(n)

function maxSubarrayKadane(arr) {
  let max_so_far = arr[0];
  let max_ending_here = 0;
  for(let i = 0; i < arr.length; i++) {
    max_ending_here += arr[0];
    if(max_so_far < max_ending_here) {
      max_so_far =  max_ending_here; 
    }
    if(max_ending_here < 0) {
      max_ending_here = 0;
    }
  }
  return max_so_far;
}