// https://leetcode.com/problems/search-a-2d-matrix/

// 74. Search a 2D Matrix
// Medium
// 11.3K
// 331
// company
// Amazon
// company
// Bloomberg
// company
// Apple
// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.

// Example 1:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true

// Example 2:

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
 

// Constraints:

// m == matrix.length
// n == matrix[i].length
// 1 <= m, n <= 100
// -104 <= matrix[i][j], target <= 104


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let min = 0;
  let max = matrix.length - 1;
  let mid = min + Math.floor((max - min) / 2);
  const width = matrix[0].length;
  let targetIdx;

  if (target < matrix[min][0] || target > matrix[max][width - 1]) {
      return false;
  }

  // find which array the target will be in, if it is in matrix
  while (min <= max) {
      if (target >= matrix[mid][0] && target <= matrix[mid][width - 1]) {
          targetIdx = mid;
          break;
      } 
      if (target < matrix[mid][0]) {
          max = mid - 1;
      } else if (target > matrix[mid][width -1]) {
          min = mid + 1;
      }
      mid = min + Math.floor((max - min) / 2);
  }
  
  let arr = matrix[targetIdx];
  min = 0;
  max = arr.length - 1;
  mid = min + Math.floor((max - min) / 2);

  // find out whether target is in that array
  while (min <= max) {
      if (target === arr[mid]) {
          return true;
      }
      if (target < arr[mid]) {
          max = mid - 1;
      }
      if (target > arr[mid]) {
          min = mid + 1;
      }
      mid = min + Math.floor((max - min) / 2);
  }

  return false;
};


console.log(searchMatrix(matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3));

console.log(searchMatrix(matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13));