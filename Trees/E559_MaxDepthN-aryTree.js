/**Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example, given a 3-ary tree:

  Definition for a Node.
  function Node(val,children) {
     this.val = val;
     this.children = children;
  };
 

 @param {Node} root
 @return {number}
**/

var maxDepth = function(root) {
  return searchDepth(root, 0)
};

function searchDepth(node, d) {
  if(!node) {
    return d;
  }
  d++;
  if(node.children.length > 0) {
    let curr = d;
    for(let i = 0; i < node.children.length; i++) {
      d = Math.max(searchDepth(node.children[i], curr), d)
    }
  }
  return d
}
