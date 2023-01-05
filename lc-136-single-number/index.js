// 136. Single Number
// Easy
// 12.5K
// 476
// company
// Amazon
// company
// Apple
// company
// Google
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

 

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1
 

// Constraints:

// 1 <= nums.length <= 3 * 104
// -3 * 104 <= nums[i] <= 3 * 104
// Each element in the array appears twice except for one element which appears only once.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const numsSet = new Set();

  for (let num of nums) {
      if (!numsSet.has(num)) {
          numsSet.add(num);
      } else {
          numsSet.delete(num);
      }
  }

  numsArray = [...numsSet];
  return numsArray[0];
};