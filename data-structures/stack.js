function Stack() {
  this.count = 0
  this.storage = {}
}

// pop, push, peek

Stack.prototype.push = function(val) {
  this.storage[this.count] = val
  this.count ++
}

Stack.prototype.pop = function() {
  if (this.count === 0) {
    return undefined
  }
  this.count --
  var removed = this.storage[this.count]
  delete this.storage[this.count]
  return removed
}

Stack.prototype.peek = function() {
  return this.storage[this.count - 1]
}

Stack.prototype.print = function() {
  var output = "["
  var current = this.storage
}

var stack = new Stack()

console.log(stack)
stack.push(1)
stack.push("hello")
stack.push("two")
stack.pop()
stack.pop()
stack.push("hello")
stack.push("hello")
stack.push("hello")

console.log(stack)
