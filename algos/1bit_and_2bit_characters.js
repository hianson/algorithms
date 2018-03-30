var isOneBitCharacter = function(bits) {
  for (var i = 0; i < bits.length; i++) {
    if (bits[i] === 0 && i !== bits.length-1) {
      bits[i] = 'x'
    }

    if (bits[i] === 1) {
      bits[i] = 'x'
      bits[i + 1] = 'x'
      i++
    }
  }
  return bits.includes(0)
};
