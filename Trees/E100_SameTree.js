/*
Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  return helper(p,q)
};

function helper(p,q) {
  if(!p && q || p && !q) {
    return false;
  } else if(!p && !q) {
    return true;
  }
  if(p.val === q.val) {
    return helper(p.left, q.left) && helper(p.right, q.right)
  }
  return false;
}
