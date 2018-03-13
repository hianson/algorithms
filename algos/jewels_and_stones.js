var numJewelsInStones = function(J, S) {
  var jewels = 0

  for (var i = 0; i < S.length; i++) {
    for (var j = 0; j < J.length; j++) {
      if (S[i] === J[j]) {
        jewels += 1
      }
    }
  }
  return jewels
};
