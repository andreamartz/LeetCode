// https://leetcode.com/problems/sort-the-people/

// 2418. Sort the People
// Easy
// 740
// 10
// company
// Infosys
// You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

// For each index i, names[i] and heights[i] denote the name and height of the ith person.

// Return names sorted in descending order by the people's heights.

 

// Example 1:

// Input: names = ["Mary","John","Emma"], heights = [180,165,170]
// Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
// Example 2:

// Input: names = ["Alice","Bob","Bob"], heights = [155,185,150]
// Output: ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
 

// Constraints:

// n == names.length == heights.length
// 1 <= n <= 103
// 1 <= names[i].length <= 20
// 1 <= heights[i] <= 105
// names[i] consists of lower and upper case English letters.
// All the values of heights are distinct.

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
  const heightsMap = {};
  const sortedPeople = [];

  for (let i = 0; i < heights.length; i += 1) {
      let height = heights[i];
      heightsMap[height] = names[i];
  }

  const sortedHeights = Object.keys(heightsMap).sort((a, b) => b - a);

  for (const height of sortedHeights) {
      sortedPeople.push(heightsMap[height]);
  }
  return sortedPeople;
};