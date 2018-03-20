var moveZeroes = function(nums) {
  var zeroes = 0;

  for (var i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      zeroes++
    }
  }

  for (var i = 0; i < zeroes; i++) {
    nums.push(0)
  }
};
