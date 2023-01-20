// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// 3. Longest Substring Without Repeating Characters
// Medium
// 31.5K
// 1.4K
// company
// Bloomberg
// company
// Amazon
// company
// Adobe
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

var lengthOfLongestSubstring = function(s) {
  if (s.length === 1) return 1;

  let maxSubstr;
  let maxLength = 0;

  // the index in the outer loop represents the first letter of the substring
  for (let i = 0; i < s.length; i += 1) {
      let uniqueChars = new Set();
      for (let j = i; j < s.length; j += 1) {
          if (uniqueChars.has(s[j])) {
              if (uniqueChars.size > maxLength) {
                  maxSubstr = s.slice(i,j);
                  maxLength = maxSubstr.length;
              }
              break;
          }
          uniqueChars.add(s[j]);
          if (uniqueChars.size > maxLength) {
              maxSubstr = s.slice(i,j + 1);
              maxLength = maxSubstr.length;
              console.log("MAX LENGTH: ", maxLength);
          }
      }
  }
  return maxLength;
};