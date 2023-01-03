// 35. Search Insert Position
// Easy
// 11.1K
// 516
// company
// Apple
// company
// Google
// company
// Microsoft
// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:

// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:

// Input: nums = [1,3,5,6], target = 7
// Output: 4
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  // let mid = nums.length / 2;
  let min = 0;
  let max = nums.length - 1;
  let mid;

  if (target < nums[0]) {
      return 0;
  }
  if (target > nums[max]) {
      return max + 1;
  }
  
  while(min <= max) {
    mid = min + Math.floor((max - min) / 2);

    if (target === nums[mid]) {
        return mid;
    } 
    // if the target is less than nums[mid]
    if (target < nums[mid]) {
        // if target is greater than nums[mid - 1] then return mid
        if (target > nums[mid - 1]) {
            return mid;
        } 
        max = mid - 1;
    }
    // if the target is greater than nums[mid]
    if (target > nums[mid]) {
        // if target is less than nums[mid + 1] then return 
        if (target < nums[mid + 1]) {
            return mid + 1;
        }
        min = mid + 1;
    }
  }
};