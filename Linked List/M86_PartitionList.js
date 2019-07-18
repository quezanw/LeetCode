/*
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let before = new ListNode(null);  
  let after = new ListNode(null);
  let c1 = before, c2 = after;
  while(head) {
    if(head.val < x) {
      c1.next = head;
      c1 = c1.next;
    } else {
      c2.next = head;
      c2 = c2.next;
    }
    head = head.next;
  }
  c2.next = null;
  c1.next = after.next;
  before = before.next;
  return before;
};
