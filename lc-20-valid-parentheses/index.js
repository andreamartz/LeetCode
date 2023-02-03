// https://leetcode.com/problems/valid-parentheses/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const brackets = [];
  const regexOpen = /[({[]/;
  const match = {
      ')': '(',
      ']': '[',
      '}': '{',
  }

  for (const char of s) {
      if (regexOpen.test(char)) {
          brackets.push(char);
          continue;
      }

      const lastIdx = brackets.length - 1;

      if (brackets[lastIdx] !== match[char]) {
          return false;
      }
      brackets.pop();
  }

  if (brackets.length !== 0) return false;
  return true;
};
