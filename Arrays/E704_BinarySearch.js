// Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


var search = function(nums, target) {
  let lower = 0;
  let upper = nums.length - 1;
  while(lower <= upper) {
    let mid = Math.floor((upper + lower) / 2);
    if(nums[mid] === target) {
      return mid;
    }
    if(nums[mid] > target) {
      upper = mid - 1;
    } else {
      lower = mid + 1;
    }
  }
  return -1;
};