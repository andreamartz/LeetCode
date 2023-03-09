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
    let l3Next = new ListNode();
    let l3 = new ListNode(0, l3Next);
    const l3Head = l3;

    let l3Prev = new ListNode(null, l3);
    // l3.next = l3Next;

    let tens;
    let mod10;

    while (l1 && l2) {
        mod10 = ((l1.val + l2.val + l3.val) % 10); // ones
        tens = Math.floor((l1.val + l2.val + l3.val) / 10);  // tens

        l3.val = mod10;
        l3.next = new ListNode(tens);    // carry over the tens
        l1 = l1.next;
        l2 = l2.next;
        l3Prev = l3;
        l3 = l3.next;
    }

    while (l1 || l2) {
        if (l1) {
            // const nodes = add(l1, l3);
            // [l1, l3] = nodes;
            mod10 = ((l1.val + l3.val) % 10); // ones
            tens = Math.floor((l1.val + l3.val) / 10);  // tens

            l3.val = mod10;
            l3.next = new ListNode(tens);  // carry over the tens     
            l1 = l1.next;
            l3Prev = l3;
            l3 = l3.next;
        }

        if (l2) {
            // const nodes = add(l2, l3);
            // [l2, l3] = nodes;
            mod10 = ((l2.val + l3.val) % 10); // ones
            tens = Math.floor((l2.val + l3.val) / 10);  // tens

            l3.val = mod10;
            l3.next = new ListNode(tens);  // carry over the tens     
            l2 = l2.next;
            l3Prev = l3;
            l3 = l3.next;
        }
    }
    if (l3.val === 0) {
        l3Prev.next = null;
    }
    return l3Head;
};

// function add(node1, node2) {
//     const mod10 = ((node1.val + node2.val) % 10); // ones
//     const tens = Math.floor((node1.val + node2.val) / 10);  // tens

//     node2.val = mod10;
//     node2.next = new ListNode(tens);  // carry over the tens     
//     node1 = node1.next;
//     const node2Prev = node2;
//     node2 = node2.next;
//     return [node1, node2];
// }

const lListNode1 = new ListNode(3);
const lListNode2 = new ListNode(7);
lListNode1.next = lListNode2;

const lListNode3 = new ListNode(9);
const lListNode4 = new ListNode(2);
lListNode3.next = lListNode4;

console.log(addTwoNumbers(lListNode1, lListNode3));