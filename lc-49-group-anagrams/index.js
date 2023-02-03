// https://leetcode.com/problems/group-anagrams/

// 49. Group Anagrams
// Medium
// 13.9K
// 411
// company
// Amazon
// company
// Apple
// company
// Yandex
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Example 2:

// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]
 

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.



// Facts:
   // all anagrams that are made up of the same set of characters can be represented by a single string - this string is the sorted characters in any one of the words

// Edge cases:
   // an array with only one empty string
   // an array with only one string that is one character in length

// Plan:
   // create a dictionary where the keys are strings; each key represents a different set of words that are anagrams of each other
   // iterate over strs and place each word into its appropriate array in the dictionary

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// anagrams dictionary will look like this:  
// { 
//   "aet": ["eat", "tea", "ate"],
//   "ant": ["tan", "nat"],
//   "abt": ["bat"],
// }

var groupAnagrams = function(strs) {
  const anagrams = {};
  // create dictionary of anagrams where each key is a sorted string representing a list of anagrams
  for (const str of strs) {
    const sorted = [...str.toLowerCase()].sort().join("");
    if (anagrams[sorted]) {
      anagrams[sorted].push(str);
    } else {
      anagrams[sorted] = [str];
    }
  }
  // create and fill in the nested array groupedAnagrams to return as the answer
  const groupedAnagrams = [];
  for (const anagram in anagrams) {
    groupedAnagrams.push(anagrams[anagram]);
  }
  return groupedAnagrams;
};