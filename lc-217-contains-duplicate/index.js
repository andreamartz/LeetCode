function containsDuplicate(nums) {
  return (new Set(nums)).size !== nums.length;
}

console.log(containsDuplicate([]));