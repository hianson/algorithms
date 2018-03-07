// leetcode

var fizzBuzz = function(n) {
  var results = []
    for (var i = 1; i <= n; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            results.push("FizzBuzz")
        } else if (i % 5 == 0) {
            results.push("Buzz")
        } else if (i % 3 == 0) {
            results.push("Fizz")
        } else {
            results.push(i.toString())
        }
    }
    return results
};
