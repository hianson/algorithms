var nextGreaterElement = function(findNums, nums) {
  var output = []

  for (var i = 0; i < findNums.length; i++) {
    var nums2ElementIdx = nums.lastIndexOf(findNums[i])
    var answered = false

    for (var j = nums2ElementIdx; j < nums.length; j++) {
      var num = -1
      if (nums[j] > findNums[i] && answered == false) {
        num = nums[j]
        output.push(nums[j])
        answered = true
      }

      if (j === nums.length - 1 && answered == false) {
        output.push(-1)
      }
    }
  }
  return output
};
