/*Given an array A of non-negative integers, half of the integers in A are odd, and half of the integers are even.

Sort the array so that whenever A[i] is odd, i is odd; and whenever A[i] is even, i is even.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
*/
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  for(let i = 0; i < A.length; i++) {
    if(A[i] % 2 !== i % 2) {
      for(let j = i + 1; j < A.length; j++) {
        if(A[j] % 2 === i % 2) {
          [A[j], A[i]] = [A[i], A[j]];
          break;
        }
      }
    }
  }
  return A
};
