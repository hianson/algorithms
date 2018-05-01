fibonacci = (n, memo={}) => {
  if (n <= 2) return 1
  if (memo[n]) {
    return memo[n]
  } else {
    return fibonacci(n - 1) + fibonacci (n - 2)
  }
}
