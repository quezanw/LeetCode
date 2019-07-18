/*
 *Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.

Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  if(nums.length < 1) {
    return nums;
  }
  let start = nums[0], end = nums[0];
  let result = [];
  for(let i = 1; i < nums.length; i++) {
    if(end + 1 !== nums[i]) {
      if(start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }
      start = nums[i];
    }
    end = nums[i];
  }
  if(start === end) {
    result.push(`${start}`);
  } else {
    result.push(`${start}->${end}`);
  }
  return result;
};
