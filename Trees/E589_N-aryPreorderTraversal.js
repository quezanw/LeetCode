/**
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
var preorder = function(root) {
  return preorderSearch(root, [])
};

function preorderSearch(node, arr) {
  if(node) {
    arr.push(node.val);
    for(let i = 0; i < node.children.length; i++) {
      arr = preorderSearch(node.children[i], arr);
    }
  }
  return arr;
}
