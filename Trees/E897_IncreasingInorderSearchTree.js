/*
Given a tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only 1 right child.

  // Definition for a binary tree node.
  function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
 }

  @param {TreeNode} root
  @return {TreeNode}

*/

var increasingBST = function(root) {
  let result = depthSearch(root, []);
  let head = new TreeNode(result[0]);
  let curr = head;
  for(let i = 1; i < result.length; i++) {
    curr.right = new TreeNode(result[i]);
    curr = curr.right;
  }
  return head;
};

function depthSearch(node, arr) {
  if(!node) {
    return arr;
  }
  arr = depthSearch(node.left, arr);
  arr.push(node.val);
  arr = depthSearch(node.right, arr);
  return arr;
}
