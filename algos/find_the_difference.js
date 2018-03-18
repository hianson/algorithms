var findTheDifference = function(s, t) {
  var sInventory = {}
  var tInventory = {}
  
  for (var i = 0; i < s.length; i++) {
    if (sInventory[s[i]]) {
      sInventory[s[i]]++
    } else {
      sInventory[s[i]] = 1
    }
  }

  for (var i = 0; i < t.length; i++) {
    if (tInventory[t[i]]) {
      tInventory[t[i]]++
    } else {
      tInventory[t[i]] = 1
    }
  }

  for (var i in tInventory) {
    if (tInventory[i] !== sInventory[i]) {
      return i
    }
  }
};
