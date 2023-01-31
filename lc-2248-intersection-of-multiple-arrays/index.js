// https://leetcode.com/problems/intersection-of-multiple-arrays/

// 2248. Intersection of Multiple Arrays
// Easy
// 440
// 25
// company
// Bloomberg
// company
// Uber
// Given a 2D integer array nums where nums[i] is a non-empty array of distinct positive integers, return the list of integers that are present in each array of nums sorted in ascending order.
 

// Example 1:

// Input: nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]
// Output: [3,4]
// Explanation: 
// The only integers present in each of nums[0] = [3,1,2,4,5], nums[1] = [1,2,3,4], and nums[2] = [3,4,5,6] are 3 and 4, so we return [3,4].
// Example 2:

// Input: nums = [[1,2,3],[4,5,6]]
// Output: []
// Explanation: 
// There does not exist any integer present both in nums[0] and nums[1], so we return an empty list [].
 

// Constraints:

// 1 <= nums.length <= 1000
// 1 <= sum(nums[i].length) <= 1000
// 1 <= nums[i][j] <= 1000
// All the values of nums[i] are unique.


/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
  // const freqs = {};
  const common = new Set(nums[0]);
  const length = nums.length;

  for (let commonNum of common) {
      for (let i = 0; i < nums.length; i += 1) {
          if (nums[i].findIndex(num => num === commonNum) === -1) {
              common.delete(commonNum);
          }
      }
  }
  return [...common].sort((a, b) => a - b);
};

console.log(intersection([[3,1,2,4,5], [1,2,3,4], [3,4,5,6]]));   // [3,4]
console.log(intersection([[1,2,3], [4,5,6]]));    // []