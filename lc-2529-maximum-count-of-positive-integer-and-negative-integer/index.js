// https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/description/

// 2529. Maximum Count of Positive Integer and Negative Integer
// Easy
// 278
// 16
// ShareChat
// Given an array nums sorted in non-decreasing order, return the maximum between the number of positive integers and the number of negative integers.

// In other words, if the number of positive integers in nums is pos and the number of negative integers is neg, then return the maximum of pos and neg.
// Note that 0 is neither positive nor negative.

 

// Example 1:

// Input: nums = [-2,-1,-1,1,2,3]
// Output: 3
// Explanation: There are 3 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 2:

// Input: nums = [-3,-2,-1,0,0,1,2]
// Output: 3
// Explanation: There are 2 positive integers and 3 negative integers. The maximum count among them is 3.
// Example 3:

// Input: nums = [5,20,66,1314]
// Output: 4
// Explanation: There are 4 positive integers and 0 negative integers. The maximum count among them is 4.
 

// Constraints:

// 1 <= nums.length <= 2000
// -2000 <= nums[i] <= 2000
// nums is sorted in a non-decreasing order.
 

// Follow up: Can you solve the problem in O(log(n)) time complexity?


// Approach: 
// Need two helper functions
  // 1. Find the last index of a negative number. This is a helpful approach, bc we know that all numbers before it must also be negative.
  // 2. Find the first index of a positive number. THis is helpful, bc we know that all numbers after it must also be positive.
  F

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
  const firstPos = findIdxOfFirstPos(nums);
  const lastNeg = findIdxOfLastNeg(nums);
  console.log("firstPos: ", firstPos, "lastNeg: ", lastNeg);
  let pos = 0;
  let neg = 0;

  if (firstPos !== -1) {
      pos = nums.length - firstPos;
  }

  if (lastNeg !== -1) {
      neg = lastNeg + 1;
  }

  return Math.max(pos, neg);
};

const findIdxOfLastNeg = (arr) => {
  let lo = 0;
  let hi = arr.length - 1;
  let boundaryIdx = -1;

  while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (arr[mid] < 0) {
          boundaryIdx = mid;
          lo = mid + 1;
      } else {
          hi = mid - 1;
      }
  }
  return boundaryIdx;
}

const findIdxOfFirstPos = (arr) => {
  let lo = 0;
  let hi = arr.length - 1;
  let boundaryIdx = -1;

  while(lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (arr[mid] > 0) {
          boundaryIdx = mid;
          hi = mid - 1;
      } else {
          lo = mid + 1;
      }
  }
  return boundaryIdx;
}