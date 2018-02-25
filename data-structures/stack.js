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

// using string as storage:

var Stack = function() {
  this.storage = "";
  this.delimiter = "*";
}

Stack.prototype.push = function(val) {
  this.storage = this.storage + this.delimiter + val
}

Stack.prototype.pop = function() {
  var lastDelimiterIndex = this.storage.lastIndexOf('*')
  var lastItem = this.storage.slice(lastDelimiterIndex, -1)
  this.storage = this.storage.slice(0, lastDelimiterIndex)

  return lastItem
}

Stack.prototype.size = function() {
  var size = 0

  for (var i = 0; i < this.storage.length; i++) {
    if (this.storage[i] === "*") {
      size += 1
    }
  }
  return size
}

var myWeeklyMenu = new Stack();

myWeeklyMenu.push("RedBeans");
myWeeklyMenu.push("IceCreams");
myWeeklyMenu.push("LilacDreams")
// myWeeklyMenu.pop()
console.log(myWeeklyMenu.size())


console.log(myWeeklyMenu.storage)

//

function Stack(capacity) {
  this.capacity = capacity || Infinity;
  this.storage = {};
  this.count = 0;
}

Stack.prototype.push = function(val) {
  if (this.count >= this.capacity) {
    console.log('Stack overflow.')
  }

  this.storage[this.count++] = val
  return this.count
}

Stack.prototype.pop = function() {
  var popped = this.storage[--this.count]

  delete this.storage[--this.count]
  if (this.count < 0) {
    this.count = 0
  }
  return popped
}

Stack.prototype.peek = function() {
  return this.storage[this.count-1]
}

var stack = new Stack()

stack.push('hello')
stack.pop()
stack.push('world')
stack.push('llama')
console.log(stack.peek())

console.log(stack)
