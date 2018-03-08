var findWords = function(words) {
  var results = [];
  var keyboard = {};
  keyboard["row1"] = 'QWERTYUIOPqwertyuiop';
  keyboard["row2"] = 'ASDFGHJKLasdfghjkl';
  keyboard["row3"] = 'ZXCVBNMzxcvbnm';

  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i][0];
    var wordFits = true;
    var row;

    keyboard.row1.indexOf(firstLetter) >= 0 ? row = 1: null;
    keyboard.row2.indexOf(firstLetter) >= 0 ? row = 2: null;
    keyboard.row3.indexOf(firstLetter) >= 0 ? row = 3: null;

    for (var j = 0; j < words[i].length; j++) {
      var letter = words[i][j]
      if (keyboard[`row${row}`].indexOf(letter) < 0) {
        wordFits = false;
      }
    }
    if (wordFits == true) {
      results.push(words[i])
    }
  }
  return results
};
