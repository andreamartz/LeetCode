// https://leetcode.com/problems/merge-two-sorted-lists/description/

// 21. Merge Two Sorted Lists
// Easy
// 17.1K
// 1.6K
// company
// Amazon
// company
// Apple
// company
// Adobe
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1: (see image on LeetCode)


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(node1, node2) {
  let newHead = new ListNode();
  let node3 = newHead;

  if (node1 === null && node2 === null) return null;
  if (node1 === null && node2 !== null) return node2;
  if (node1 !== null && node2 === null) return node1;

  while(node1 && node2) {
      if (node1.val <= node2.val) {
          node3.val = node1.val;
          node1.prev = node1;
          node1 = node1.next;
      } else {
          node3.val = node2.val;
          node2.prev = node2;
          node2 = node2.next;
      }

      node3.next = new ListNode();
      node3.prev = node3;
      node3 = node3.next;
  }

  // either node1 or node2 or both is/are null
  if (node1) {
      node3.val = node1.val;
      node3.next = node1.next;
  }
  if (node2) {
      node3.val = node2.val;
      node3.next = node2.next
  }

  return newHead;
};
