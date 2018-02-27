// Iterative Factorial

var iterativeFactorial = function(n) {
  var total = 1
  for (var i = 1; i <= n; i++) {
    total *= i
  }
  return total
}

iterativeFactorial(5) // 4 * 3 * 2 * 1

// Recursive Factorial

var recursiveFactorial = function(n) {
  if (n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

recursiveFactorial(4)


// MEM STACK:

// {1st recursion} n = 4
// var recursiveFactorial = function(n) {
//   if (n === 0) {                         // false
//     return 1
//   }
//   return n * recursiveFactorial(n - 1)   // 4 * rF(3)     ... 4 * 6 = 24
// }

// {2nd recursion} n = 3
// var recursiveFactorial = function(n) {
//   if (n === 0) {                         // false
//     return 1
//   }
//   return n * recursiveFactorial(n - 1)   // 3 * rF(2)     ..... 3 * 2 = 6
// }

// {3rd recursion} n = 2
// var recursiveFactorial = function(n) {
//   if (n === 0) {                         // false
//     return 1
//   }
//   return n * recursiveFactorial(n - 1)   // 2 * rF(1)      ... 2 * 1 = 2
// }

// {4th recursion} n = 1
// var recursiveFactorial = function(n) {
//   if (n === 0) {                         // false
//     return 1
//   }
//   return n * recursiveFactorial(n - 1)   // 1 * rF(0)      ... 1 * 1 = 1
// }

// {5th recursion} n = 0
// var recursiveFactorial = function(n) {
//   if (n === 0) {                         // true
//     return 1                             // returns 1
//   }
//   return n * recursiveFactorial(n - 1)
// }
