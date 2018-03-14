var singleNumber = function(nums) {
  var set = new Set

  nums.forEach((num) => {
    if (set.has(num)) {
      set.delete(num)
    } else {
      set.add(num)
    }

  })
  return set.values().next().value
};
