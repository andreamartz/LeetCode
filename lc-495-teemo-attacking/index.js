// https://leetcode.com/problems/teemo-attacking/

// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

// Return the total number of seconds that Ashe is poisoned.

 

// Example 1:

// Input: timeSeries = [1,4], duration = 2
// Output: 4
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
// Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.
// Example 2:

// Input: timeSeries = [1,2], duration = 2
// Output: 3
// Explanation: Teemo's attacks on Ashe go as follows:
// - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
// - At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
// Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.
 

// Constraints:

// 1 <= timeSeries.length <= 104
// 0 <= timeSeries[i], duration <= 107
// timeSeries is sorted in non-decreasing order.
// Accepted
// 117.4K
// Submissions
// 206.2K
// Acceptance Rate
// 56.9%

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let totalSeconds = 0;
  let prevEnd = -1;

  for (let i = 0; i < timeSeries.length; i += 1) {
    let start = timeSeries[i];
    let end = start + duration - 1;

    if (start <= prevEnd) {
      // adjust start to remove overlap with previous poisoning
      start = prevEnd + 1;
    }
    const seconds = end - start + 1;
    totalSeconds += seconds;
    prevEnd = end;
  }

  return totalSeconds;
};

console.log(findPoisonedDuration([1,4], 2));
console.log(findPoisonedDuration([1,2], 2));