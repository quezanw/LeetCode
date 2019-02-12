// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


function printList(list) {
  let curr = list.next;
  let str = list.val;
  while(curr) {
    str += " -> " + curr.val;
    curr = curr.next;
  }
  console.log(str);
}
var mergeTwoLists = function(l1, l2) {
    let curr1 = l1;
    let curr2 = l2;
    let newList;
    if(!curr1 && !curr2) {
      return null;
    } else if (!curr1 && curr2) {
        newList = new ListNode(curr2.val);
        curr2 = curr2.next;
    } else if (curr1 && !curr2){
        newList = new ListNode(curr1.val);
        curr1 = curr1.next;
    } else {
      if(curr1.val < curr2.val) {
        newList = new ListNode(curr1.val);
        curr1 = curr1.next;
      } else {
        newList = new ListNode(curr2.val);
        curr2 = curr2.next;
      }      
    }
    
    let curr3 = newList;
    while(curr1 && curr2) {
        if(curr1.val < curr2.val) {
            curr3.next = new ListNode(curr1.val);
            curr1 = curr1.next;
        } else {
            curr3.next = new ListNode(curr2.val);
            curr2 = curr2.next;
        }
        curr3 = curr3.next;
    }
    while(curr1) {
        curr3.next = new ListNode(curr1.val);
        curr1 = curr1.next;
        curr3 = curr3.next;
    }
    while(curr2) {
        curr3.next = new ListNode(curr2.val);
        curr2 = curr2.next;
        curr3 = curr3.next;
    }
    return newList;
};