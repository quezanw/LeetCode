/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    for(let i = 1; i < strs.length; i++) {
      let foundPrefix = false;
      while(!foundPrefix && prefix.length > 0) {
        if(strs[i].length < prefix.length || strs[i].slice(0, prefix.length) !== prefix) {
          prefix = prefix.slice(0, prefix.length - 1);
        } else {
          foundPrefix = true;
        }
      }
    }
  if(prefix === undefined) {
    return "";
  }
  return prefix;
};
