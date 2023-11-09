// var containsDuplicate = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j <= nums.length; j++) {
//       if (nums[i] === nums[j]) return true;
//     }
//   }
//   return false;
// };

// Approach 1: Looping

var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i <= nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
};

// Approach 2: Creating a Set

var containsDuplicate = function (nums) {
  {
    const s = new Set(nums);
    return s.size !== nums.length;
  }
};

// Approach 3: Mapping

var containsDuplicate = function (nums) {
  const map = {};
  for (const num of nums) {
    // if we have seen this num before return true
    if (map[num]) return true;
    map[num] = true;
  }
  return false;
};
