/*
 * Given an array of integers, find if the array contains any duplicates.

Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

Example 1:

Input: [1,2,3,1]
Output: true
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = {}
  for(let num in nums) {
    if(!map[nums[num]]) {
      map[nums[num]] = 1;
    } else {
      return true;
    }
  }
  return false;
};
