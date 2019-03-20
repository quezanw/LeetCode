/*
 * Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false

Note:
You may assume the string contains only lowercase alphabets.

*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map = {};
  for(let i = 0; i < s.length; i++) {
    if(!map[s[i]]) {
      map[s[i]] = 0;
    }
    map[s[i]]++;
  }
  for(let j = 0; j < t.length; j++) {
    if(map[t[j]]) {
      map[t[j]]--;
    } else {
      return false;
    }
  }
  for(let key in map) {
    if(map[key] !== 0) {
      return false;
    }
  }
  return true;
};
