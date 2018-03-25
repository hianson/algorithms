var nums = [1, 2, 3, 5, 3]

var majorityElement = function(nums) {
  // create store to track frequency of nums
  var store = {};
  var highest = 0;
  var majorityElement;

  for (var i in nums) {
    if (store[nums[i]]) {
      store[nums[i]]++
    } else {
      store[nums[i]] = 1
    }
  }

  for (var i in store) {
    if (store[i] > highest) {
      majorityElement = +i
      highest = store[i]
    }
  }
  console.log(majorityElement)
  return majorityElement
};

majorityElement(nums)
