// Recursive Factorial

var recursiveFactorial = function(n) {
  if (n === 0) {
    return 1
  }
  return n * recursiveFactorial(n - 1)
}

recursiveFactorial(4)

// Iterative Factorial

var iterativeFactorial = function(n) {
  var total = 1
  for (var i = n; i > 1; i--) {
    total *= i
  }
  return total
}

iterativeFactorial(4) // 4 * 3 * 2 * 1
