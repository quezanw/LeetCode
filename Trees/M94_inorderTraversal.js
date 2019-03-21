/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
   let res = [];
  return traverse(root, res);
  
};

function traverse(root, arr) {
  if(!root) {
    return arr;
  }
  arr = traverse(root.left, arr);
  arr.push(root.val);
  arr = traverse(root.right, arr);
  return arr;
}

// solve iterativly 
