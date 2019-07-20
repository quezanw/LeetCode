/*
 *[200~Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

 Note: For the purpose of this problem, we define empty string as valid palindrome.

 Example 1:

 Input: "A man, a plan, a canal: Panama"
 Output: true

 Example 2:

 Input: "race a car"
 Output: false
 * */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let regex = /\W/g;
  s = s.toLowerCase().replace(regex, '');
  for(let i = 0; i < Math.floor(s.length / 2); i++) {
    if(s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true
};
