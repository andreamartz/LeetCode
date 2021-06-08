// 977. Squares of a Sorted Array
// Easy

// 2505

// 117

// Add to List

// Share
// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?


// function sortedSquares(nums) {
//   let highestNegIdx = 0;
//   // count the negative elements and square each element
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < 0) {
//       highestNegIdx = i;
//     }
//     nums[i] = Math.pow(nums[i], 2);
//   }
//   let lowestPosIdx = highestNegIdx + 1;
  
//   while (lowestPosIdx < nums.length && highestNegIdx >= 0) {
//     if (nums[highestNegIdx] >= nums[lowestPosIdx] && nums[highestNegIdx] < nums[lowestPosIdx + 1]) {
//       const temp = nums.splice(highestNegIdx, 1)[0];
//       console.log("TEMP: ", temp);
//       lowestPosIdx--;
//       nums.splice(lowestPosIdx, 0, temp);
//       console.log("NUMS: ", nums);
//       highestNegIdx--;
//     } 
//   }
//   return nums;
// }

// TIme complexity: O(n log(n))  - because we sort the array
// Space complexity: O(1)  (because no )
var sortedSquares = function(nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[i] = Math.pow(nums[left], 2);
      left++;
    } else {
      result[i] = Math.pow(nums[right], 2);
      right--;
    }
    return result;
  }

  // nums = nums.map(num => Math.pow(num, 2));
  // nums.sort((a, b) => a - b);
  // return nums;
};

console.log(sortedSquares([-4,-1,0,3,10]));

modules.export = sortedSquares;