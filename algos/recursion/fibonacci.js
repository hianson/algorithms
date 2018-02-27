// Fibonacci iterative:
var fibonacci = function(n) {
  // get n-1 and n-2
  var n1 = 0
  var n2 = 1
  if (n === 0 || n === 1) {
    return n
  }

  for (var i = 2; i <= n; i++) {
    var fibNum = n1 + n2
    n1 = n2
    n2 = fibNum
  }
  return fibNum
}

fibonacci(8)

// Recursive:
