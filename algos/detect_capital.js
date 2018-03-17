var detectCapitalUse = function(word) {
  if (word.length === 1) {
    return true
  }

  var firstLetter = word[0]
  var secondLetter = word[1]

  if (firstLetter === firstLetter.toLowerCase() && secondLetter === secondLetter.toUpperCase()) {
    return false
  }

  if (firstLetter === firstLetter.toUpperCase() && secondLetter === secondLetter.toUpperCase()) {
    for (var i = 2; i < word.length; i++) {
      if (word[i] !== word[i].toUpperCase()) {
        return false
      }
    }
  }

  if (firstLetter === firstLetter.toLowerCase() && secondLetter === secondLetter.toLowerCase()) {
    for (var i = 2; i < word.length; i++) {
      if (word[i] !== word[i].toLowerCase()) {
        return false
      }
    }
  }

  if (firstLetter === firstLetter.toUpperCase() && secondLetter === secondLetter.toLowerCase()) {
    for (var i = 2; i < word.length; i++) {
      if (word[i] !== word[i].toLowerCase()) {
        return false
      }
    }
  }
  return true
};
