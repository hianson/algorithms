var findMaxConsecutiveOnes = function(nums) {
  var tempConsecutiveOnes = 0
  var highestConsecutiveOnes = 0

  nums.forEach((num) => {
    if (num === 1) {
      tempConsecutiveOnes++
      if (tempConsecutiveOnes > highestConsecutiveOnes) {
        highestConsecutiveOnes = tempConsecutiveOnes
      }
    } else {
      tempConsecutiveOnes = 0
    }
  })
  return highestConsecutiveOnes
};
