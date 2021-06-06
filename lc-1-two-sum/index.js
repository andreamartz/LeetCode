const twoSum = function(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++){
      const addend = target - nums[i];
      if (map.has(addend)) {
        return [i, map.get(addend)];
      }
      map.set(nums[i], i);
  }
}