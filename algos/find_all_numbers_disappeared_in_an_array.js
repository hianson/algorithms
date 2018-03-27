var nums = [1,1]

var findDisappearedNumbers = function(nums) {
  var res = []

  for (var i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) {
      res.push(i + 1)
    }
  }
  return res
};

findDisappearedNumbers(nums)
