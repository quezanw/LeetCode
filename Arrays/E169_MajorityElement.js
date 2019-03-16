/*
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count = {};
  for(let i = 0; i < nums.length; i++) {
    if(!count[nums[i]]) {
      count[nums[i]] = 0;
    }
    count[nums[i]]++;
  }
  for(let num in count) {
    if(count[num] > nums.length / 2) {
      return num;
    }
  }
};
