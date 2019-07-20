/*Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
]
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let arr = [];
  if(root) {
    arr = helper(root, arr, 0)
  }
  return arr

};

function helper(node, arr, level) {
  if(!node) {
    return arr;
  }
  if(typeof arr[level] === 'undefined') {
    arr[level] = [node.val];
  } else {
    arr[level].push(node.val);
  }
  arr = helper(node.left, arr, level + 1);
  arr = helper(node.right, arr, level + 1);
  return arr;
}
