// naive sol

var matrixReshape = function(nums, r, c) {
  var newMatrix = []
  var newElements = r * c
  var matrixElementIdx = 0
  var curNumElements = nums.reduce((sum, num) => {
    return sum += num.length
  }, 0)

  if (newElements !== curNumElements) {
    return nums
  }

  var matrixElements = nums[0]
  for (var i in nums) {
    if (i > 0) {
      matrixElements = matrixElements.concat(nums[i])
    }
  }

  for (var i = 0; i < r; i++) {
    newMatrix.push([])
  }

  newMatrix.forEach((row) => {
    for (var i = 0; i < c; i++) {
      row.push(matrixElements[matrixElementIdx++])
    }
  })
  return newMatrix
};
