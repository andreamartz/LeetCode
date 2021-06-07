// 1243. Array Transformation
// Easy

// 87

// 40

// Add to List

// Share
// Given an initial array arr, every day you produce a new array using the array of the previous day.

// On the i-th day, you do the following operations on the array of day i-1 to produce the array of day i:

// If an element is smaller than both its left neighbor and its right neighbor, then this element is incremented.
// If an element is bigger than both its left neighbor and its right neighbor, then this element is decremented.
// The first and last elements never change.
// After some days, the array does not change. Return that final array.

 

// Example 1:

// Input: arr = [6,2,3,4]
// Output: [6,3,3,4]
// Explanation: 
// On the first day, the array is changed from [6,2,3,4] to [6,3,3,4].
// No more operations can be done to this array.
// Example 2:

// Input: arr = [1,6,3,4,3,5]
// Output: [1,4,4,4,4,5]
// Explanation: 
// On the first day, the array is changed from [1,6,3,4,3,5] to [1,5,4,3,4,5].
// On the second day, the array is changed from [1,5,4,3,4,5] to [1,4,4,4,4,5].
// No more operations can be done to this array.
 

// Constraints:

// 3 <= arr.length <= 100
// 1 <= arr[i] <= 100


// My first successful submission:
// Runtime: 2244 ms, faster than 8.70% of JavaScript online submissions for Array Transformation.
// Memory Usage: 47.8 MB, less than 8.70% of JavaScript online submissions for Array Transformation.
// function transformArray(arr) {
//   const result = [...arr];
//   let edited = false;

//   while (!edited) {
//       for (let i = 1; i < arr.length - 1; i++) {
//           // make any necessary changes
//           if (arr[i] < arr[i - 1] && arr[i] < arr[i + 1]) {
//             result[i] = arr[i] + 1;
//           } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//             result[i] = arr[i] - 1;
//           }
//           console.log("i: ", i, "ARR: ", arr, "RESULT: ", result);
//       }
//       edited = arr.every((num, i) => num === result[i]);
//       arr = [...result];
//   }
//   return arr;
// }


// My 2nd successful attempt:
// Runtime: 80 ms, faster than 69.57% of JavaScript online submissions for Array Transformation.
// Memory Usage: 38.8 MB, less than 73.91% of JavaScript online submissions for Array Transformation.
// Time complexity: O(n^2)
// Space complexity: O(n)
function transformArray(arr) {
  let result;
  let edited = true;
  
  // loop until there's an iteration where no array elements are changed
  while (edited) {
    edited = false;
    result = arr.map((num, i) => {
      if (num > arr[i - 1] && num > arr[i + 1]) {
        edited = true;
        return num - 1;
      } else if (num < arr[i - 1] && num < arr[i + 1]) {
        edited = true;
        return num + 1;
      } else {
        return num;
      }
    });
    // set arr to have the same contents as result
    arr = [...result];
  }
  return arr;
}

// console.log(transformArray([6,2,3,4]));
// console.log(transformArray([1,6,3,4,3,5]));
console.log(transformArray([1,2,1,2,1,1,1,2,1]));

module.exports = transformArray;