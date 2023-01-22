// https://leetcode.com/problems/degree-of-an-array/// 

//697. Degree of an Array

// Easy

// 1399

// 985

// Add to List

// Share
// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 
// Example 1:

// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
// Example 2:

// Input: nums = [1,2,2,3,1,4,2]
// Output: 6
// Explanation: 
// The degree is 3 because the element 2 is repeated 3 times.
// So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

// Constraints:

// nums.length will be between 1 and 50,000.
// nums[i] will be an integer between 0 and 49,999.


// O(n) solution:
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  const freqs = {};
  const first = {};
  let maxFreq = 0;
  let shortest = 0;

  for (let i = 0; i < nums.length; i += 1) {
      const num = nums[i];
      if (freqs[num]) {
          freqs[num] += 1;
      } else {
          freqs[num] = 1;
          first[num] = i;
      }

      if (freqs[num] > maxFreq) {
        maxFreq = freqs[num];
        shortest = i - first[num] + 1;
      } else if (freqs[num] === maxFreq) {
        shortest = Math.min(shortest, i - first[num] + 1);
      }
      console.log(num, i, maxFreq, shortest, first[num]);
  }
  return shortest;
};


// less efficient:

// function findShortestSubArray(nums) {
//   const counts = {};
//   for (let num of nums) {
//     counts[num] = (counts[num] + 1) || 1;
//   }
//   const degree = Math.max(...Object.values(counts));
//   const degreeKeys = Object.entries(counts)
//     .filter(arr => arr[1] === degree)
//     .map(arr => +arr[0])
//   ;
//   // const keysSet = new Set(degreeKeys);
//   // console.log("COUNTS: ", counts, "DEGREE: ", degree, "DEGREEKEYS: ", degreeKeys, "KEYSSET: ", keysSet);

//   const indices = {};
//   let length;
//   for (let key of degreeKeys) {
//     if (!length || (last - first + 1) < length) {
//       length = last - first + 1;
//       indices.num = key;
//       indices.first = nums.indexOf(key);
//       indices.last = nums.lastIndexOf(key);
//       indices.length = last - first + 1;
//     }  
//   }
//   return indices.length;
// }

console.log(findShortestSubArray([1,2,2,3,1]));  // 