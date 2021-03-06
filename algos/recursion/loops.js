//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.

var loop = function(n) {
  for (var i = n; i >= 0; i--) {
    console.log(i)
  }
}

loop(5)

//2. Next, try looping just like above except using recursion

var recursiveLoop = function(n) {
  if (n === 0) {
    console.log('loop completed')
  }
  return recursiveLoop(n - 1)
}

recursiveLoop(4)

//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.

var exponent = function(base, expo) {
  var sum = base
  for (var i = 1; i < expo; i++) {
    sum *= base
  }
  return sum
}

exponent(3, 2)

//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

var recursiveExponent = function(base, expo) {
  if (expo <= 1) {
    return base
  }
  return recursiveExponent(base * base, expo - 1)
}

recursiveExponent(3, 2)

//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//iterative:
var multiplier = function(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num
  }
  return arr
}

multiplier([3, 5, 2, 4], 2)

//recursive:
var recursiveMultiplier = function(arr, num) {
  if (arr.length === 0) {
    return arr
  }
  var last = arr.pop()
  recursiveMultiplier(arr, num)
  arr.push(last * num)
  return arr
}

recursiveMultiplier([3, 5, 2, 4], 2)

// MEM STACK:

// {1st execution}
// with [3, 5, 2, 4], 2
// if (arr.length === 0) {           ...false
//     return arr
//   }
//   var last = arr.pop()        ...pop off 4 in arr
//   recursiveMultiplier(arr, num)                      ... returns [6, 10, 4]
//   arr.push(last * num)                               ... push 8
//   return arr                                      ... returns [6, 10, 4, 8]



// {2nd execution}
// with [3, 5, 2], 2
// if (arr.length === 0) {           ...false
//     return arr
//   }
//   var last = arr.pop()           ... pop off 2 in arr
//   recursiveMultiplier(arr, num)                      ... returns [6, 10]
//   arr.push(last * num)                             ... push 4
//   return arr                                         ... returns [6, 10, 4]



// {3rd execution}
// with [3, 5], 2
// if (arr.length === 0) {           ...false
//     return arr
//   }
//   var last = arr.pop()      ... pop off 5 in arr
//   recursiveMultiplier(arr, num)                    ... returns [6]
//   arr.push(last * num)                             ... push 10 to [6]
//   return arr                                       ... returns [6, 10]


// {4th execution}
// with [3], 2
// if (arr.length === 0) {           ...false
//     return arr
//   }
//   var last = arr.pop()     ... pop off 3 in arr
//   recursiveMultiplier(arr, num)                    ... returns []
//   arr.push(last * num)                           ... push 6 to []
//   return arr                                     ... returns [6]

// {5th execution}
// with [], 2
// if (arr.length === 0) {           ...true
//     return arr               ... return [] down the stack
//   }
// ---------------------------------
//   var last = arr.pop()
//   recursiveMultiplier(arr, num)
//   arr.push(last * num)
//   return arr



//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse

var recursiveReverse = function(arr) {
  var reversedArr = []
  var reverseArr = function(array) {
    if (arr.length === 0) {
      return reversedArr
    }
    var last = arr.pop()
    reversedArr.push(last)
    reverseArr(arr)
  }

  reverseArr(arr)
  return reversedArr
}

recursiveReverse([1, 2, 3, 4, 5])
