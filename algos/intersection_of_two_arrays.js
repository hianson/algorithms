var intersection = function(nums1, nums2) {
  var res = []

  for (var i in nums1) {
    if (nums2.includes(nums1[i]) && !res.includes(nums1[i])) {
      res.push(nums1[i])
    }
  }
  return res
};
