/**
Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  return depthSearch(root, [])
};


function depthSearch(node, arr) {
  if(node && node.children) {
    for(let child of node.children) {
      arr = depthSearch(child, arr);
    }
    arr.push(node.val)
  }
  return arr;
}
