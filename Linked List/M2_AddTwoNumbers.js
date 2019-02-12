// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let remainder = 0;
  let sum = l1.val + l2.val;
  let head;
  if(Math.floor(sum / 10) > 0) {
      remainder = Math.floor(sum / 10);
      head = new ListNode(sum % 10);
  } else {
      head = new ListNode(sum);
  }
  let c1 = l1.next;
  let c2 = l2.next;
  let c3 = head;
  while(c1 && c2) {
      sum = c1.val + c2.val;
      if(remainder > 0) {
          sum += remainder;
      }
      if(Math.floor(sum / 10) > 0) {
          remainder = Math.floor(sum / 10);
          c3.next = new ListNode(sum % 10);
      } else {
          c3.next = new ListNode(sum);
          remainder = 0;
      }
      c1 = c1.next;
      c2 = c2.next;
      c3 = c3.next;
  }
  if(c1) {
      do {
          let val = c1.val + remainder;
          remainder = Math.floor(val / 10);
          if(remainder > 0 ) {
              c3.next = new ListNode(val % 10);
          } else {
              c3.next = new ListNode(val);
              remainder = 0;
          }
          c1 = c1.next;
          c3 = c3.next;
      } while(c1);
  }
      if(c2) {
      do {
          let val = c2.val + remainder;
          remainder = Math.floor(val / 10);
          if(remainder > 0 ) {
              c3.next = new ListNode(val % 10);
          } else {
              c3.next = new ListNode(val);
              remainder = 0;
          }
          c2 = c2.next;
          c3 = c3.next;
      } while(c2);
  }
          if(remainder > 0) {
          c3.next = new ListNode(remainder);
      }
  return head;

};