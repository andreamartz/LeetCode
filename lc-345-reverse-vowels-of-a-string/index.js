// 345. Reverse Vowels of a String
// Easy

// 1087

// 1522

// Add to List

// Share
// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

 

// Example 1:

// Input: s = "hello"
// Output: "holle"
// Example 2:

// Input: s = "leetcode"
// Output: "leotcede"
 

// Constraints:

// 1 <= s.length <= 3 * 105
// s consist of printable ASCII characters.


function reverseVowels(s) {
  const regex = /[aeiou]/i;
  let left = 0;
  let right = s.length - 1;
  sArr = s.split('');
  while (left < right) {
    if (regex.test(sArr[left]) && regex.test(sArr[right])) {
      // swap
      [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
      left++;
      right--;
    } else if (!regex.test(sArr[left]) && !regex.test(sArr[right])) {
      left++;
      right--;
    } else if (!regex.test(sArr[right])) {
      right--;
    } else {
      left++;
    }
  }
  return sArr.join('');
}

console.log(reverseVowels("leetcode"));