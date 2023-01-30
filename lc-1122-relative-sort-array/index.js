// 1122. Relative Sort Array
// Easy

// 1166

// 78

// Add to List

// Share
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]
 

// Constraints:

// 1 <= arr1.length, arr2.length <= 1000
// 0 <= arr1[i], arr2[i] <= 1000
// All the elements of arr2 are distinct.
// Each arr2[i] is in arr1.



function relativeSortArray(arr1, arr2) {
  const arr1Counts = {};
  const arr2Set = new Set(arr2);
  const notInArr2 = [];

  
  // iterate over arr1 to fill out arr1Counts
  for (let i = 0; i < arr1.length; i++) {
    const el = arr1[i];
    if (arr2Set.has(el)) {
      arr1Counts[el] = (arr1Counts[el] + 1) || 1;
    } else {
      notInArr2.push(el);
    }
  }
  // sort notInArr2 in ascending order
  notInArr2.sort((a, b) => a - b);

  let arr2Idx = 0;  // track index of arr2
  let notArr2Idx = 0;
  // iterate over arr1 and replace values
  for (let i = 0; i < arr1.length; i++) {
    // if we've traversed all of arr2
    if (arr2Idx > arr2.length - 1) {
      arr1[i] = notInArr2[notArr2Idx];
      notArr2Idx++;
    } else {
      const el = arr2[arr2Idx];
      const freq = arr1Counts[el];
      arr1[i] = el;
      arr1Counts[el]--;
      if (arr1Counts[el] === 0) arr2Idx++;
    }
  }
  return arr1;
}

console.log(relativeSortArray([2,3,1,3,2,4,6,19,9,2,7], [2,1,4,3,9,6]));  // [2,2,2,1,4,3,3,9,6,7,19]