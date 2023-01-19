// https://leetcode.com/problems/single-row-keyboard/

// 1165. Single-Row Keyboard
// Easy
// 458
// 20
// company
// Google
// There is a special keyboard with all keys in a single row.

// Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

// You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

// Example 1:

// Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
// Output: 4
// Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
// Total time = 2 + 1 + 1 = 4. 
// Example 2:

// Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
// Output: 73
 

// Constraints:

// keyboard.length == 26
// keyboard contains each English lowercase letter exactly once in some order.
// 1 <= word.length <= 104
// word[i] is an English lowercase letter.

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */

 // Facts:
    // keyboard string may be "rotated"
    // using binary search to find "a" may not be the best approach, because we want to find the index (on the keyboard) of the first letter of the word

 // Plan:
    // create a variable to track the total time; the final value of this will be returned
    // iterate over the string to create a dictionary - key is the letter, value is the idx on the keyboard
    // add time-to-get-to-each-letter to the time variable


  var calculateTime = function(keyboard, word) {
    const charIndices = {};
    let time = 0;
    let currIdx = 0;
    let chars = word.split("");

    for (let i = 0; i < keyboard.length; i += 1) {
        charIndices[keyboard[i]] = i; 
    }
    for (let i = 0; i < chars.length; i += 1) {
        let char = chars[i];
        time += Math.abs(charIndices[char] - currIdx);
        // note: currIdx is NOT i; it is the idx of the char in keyboard
        currIdx = charIndices[char];
    }
    return time;
  };