var rotatedDigits = function(N) {
  var res = 0;

  for (var i = 1; i <= N; i++) {
    let numToStr = i.toString()

    if ((numToStr.includes('2') || numToStr.includes('5') || numToStr.includes('6') || numToStr.includes('9')) && !(numToStr.includes('3') || numToStr.includes('4') || numToStr.includes('7'))) {
      res += 1
    }
  }
  return res
};
