// super helpful thank u https://www.youtube.com/watch?v=MozZbtPyqt8

function LinkedList() {
  this.head = null
}

LinkedList.prototype.isEmpty = function() {
  if (this.head === null) {
    return true
  }
  return false
}

LinkedList.prototype.print = function() {
  var output = "["
  var current = this.head

  while (current !== null) {
    output += current.data
    if (current.next !== null) {
      output += ", "
    }
    current = current.next
  }
  output += "]"
  console.log(output);
}

LinkedList.prototype.prepend = function(val) {
  var newNode = {
    data: val,
    next: this.head
  }
this.head = newNode
}

LinkedList.prototype.append = function(val) {
  var newNode = {
    data: val,
    next: null
  }
  if (this.head === null) {
    this.head = newNode
    return
  }

  var current = this.head
  while (current.next !== null) {
    current = current.next
  }
  current.next = newNode
}

LinkedList.prototype.size = function() {
  var count = 0
  var current = this.head

  while (current !== null) {
    count += 1
    current = current.next
  }
  return count
}

LinkedList.prototype.contains = function(val) {
  var current = this.head

  while (current !== null) {
    if (current.data === val) {
      return true
    }
    current = current.next
  }
  return false
}

LinkedList.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return
  }
  if (this.head.data === val) {
    this.head = this.head.next
    return
  }
  var current = this.head
  var prev = null

  while (current.data !== val) {
    prev = current
    current = current.next
  }
  prev.next = current.next
}

var list = new LinkedList()

console.log(list.isEmpty())
list.prepend(5)
list.prepend(10)
list.prepend(15)
list.append(0)
list.append(-5)

list.print()
console.log('removing 5 and 15:')
list.remove(5)
list.remove(15)
list.print()
console.log('contains 4?:', list.contains(4));
console.log('list size:', list.size())
