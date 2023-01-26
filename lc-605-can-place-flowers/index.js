// https://leetcode.com/problems/can-place-flowers/description/

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

 

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false
 

// Constraints:

// 1 <= flowerbed.length <= 2 * 104
// flowerbed[i] is 0 or 1.
// There are no two adjacent flowers in flowerbed.
// 0 <= n <= flowerbed.length

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let lo = 0;
  let hi = flowerbed.length - 1;
  let numAllowed = 0;
  for (let i = 0; i < flowerbed.length; i += 1) {
      // if spot is taken
      if (flowerbed[i]) continue;

      // check the previous spot
      if ((i - 1) >= 0) {
          // if spot is taken
          if (flowerbed[i - 1]) continue;
      }

      // check the next spot
      if ((i + 1) <= flowerbed.length - 1) {
          // if spot is taken
          if (flowerbed[i + 1]) continue;
      }
      numAllowed += 1;
      flowerbed[i] = 1;
   }
  return numAllowed >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 1));   // true
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));   // false
