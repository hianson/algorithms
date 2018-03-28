var uniqueMorseRepresentations = function(words) {
  var res = new Set
  var engAlphabet = "abcdefghijklmnopqrstuvwxyz"
  var morseAlphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]

  words.forEach((word) => {
    var morseWord = "";

    for (var i = 0; i < word.length; i++) {
      var letterIdx = engAlphabet.lastIndexOf(word[i])

      morseWord += morseAlphabet[letterIdx]
    }
      res.add(morseWord)
  })
  return res.size
};
