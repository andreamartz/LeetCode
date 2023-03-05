// https://leetcode.com/problems/add-two-numbers/

// 2. Add Two Numbers
// Medium
// 24.7K
// 4.8K
// company
// Amazon
// company
// Apple
// company
// Adobe
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
 

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
// Accepted
// 3.5M
// Submissions
// 8.6M
// Acceptance Rate
// 40.2%


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const l3 = ListNode();
  let l3Curr = l3;
  let l3Prev;
  let l1Curr = l1;
  let l1Prev;
  let l2Curr = l2;
  let l2Prev;
  let tens;
  while (l1Curr && l2Curr) {
      let mod10 = ((l1Curr.val + l2Curr.val) % 10);
      tens = Math.floor((l1Curr.val + l2Curr.val) / 10);
      l3.val = mod10;
      l3.next.val = tens;  // ??

      // NOT FINISHED
  }
};