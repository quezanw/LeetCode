/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null, curr = head;
  
  while(curr) {
    head = head.next;
    curr.next = prev;
    prev = curr;
    curr = head;
  }
  head = prev;
  return head;
};
