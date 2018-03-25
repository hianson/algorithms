var calPoints = function(ops) {
  var total = 0
  var roundPoints = 0;
  var prevRounds = [0, 0, 0]

  for (var i in ops) {
    var prevRoundIdx = prevRounds.length - 1
    if (parseInt(ops[i])) {
      roundPoints = parseInt(ops[i]);

      prevRounds.push(roundPoints)
      // prevRounds.shift()

    }
    if (ops[i] === "+") {
      roundPoints = prevRounds[prevRoundIdx] + prevRounds[prevRoundIdx-1]

      prevRounds.push(roundPoints)
      // prevRounds.shift()

    }
    if (ops[i] === "D") {
      roundPoints = prevRounds[prevRoundIdx] * 2

      prevRounds.push(roundPoints)

    }
    if (ops[i] === "C") {
      // console.log('subtracting', prevRounds[prevRoundIdx], 'pts')
      roundPoints = -prevRounds[prevRoundIdx]

      prevRounds.pop()

    }
      total += roundPoints
      // console.log(total, prevRounds)
  }
  return total
};
