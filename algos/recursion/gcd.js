// Greatest Common Divisor
function greatestCommonDivisor(n1, n2, low=(Math.min(n1, n2))) {
  if (n1 % low === 0 && n2 % low === 0) {
    return low
  }
  return greatestCommonDivisor(n1, n2, low-1)
}

greatestCommonDivisor(8, 12)
