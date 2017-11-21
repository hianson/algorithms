function LinkedList() {
  this.head = null;
}

LinkedList.prototype.print = function() {
  output = "["
  current = this.head

  while (current !== null) {
    output += current.data
    current = current.next
    if (current !== null) {
      output += ", "
    }
  }
  output += "]"
  console.log(output)
}

LinkedList.prototype.isEmpty = function() {
  if (this.head == null) {
    return true
  }
  return false
}

LinkedList.prototype.append = function(val) {
  var newNode = {
    data: val,
    next: null
  };

  if (this.isEmpty()) {
    this.head = newNode;
    return;
  }

  var current = this.head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;
};

LinkedList.prototype.prepend = function(val) {
  var newNode = {
    data: val,
    next: this.head
  }
  this.head = newNode
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
    return 'List does not contain this value.'
  }
  if (this.head.data === val) {
    this.head = this.head.next
    return
  }
  var prevNode = null
  var current = this.head

  while (current.data !== val) {
    prevNode = current
    current = current.next
  }
  prevNode.next = current


}

var list = new LinkedList()
list.print()
list.prepend(5)
list.remove(5)
list.remove(5)
list.append(5)
list.prepend(10)
// list.prepend(15)
list.print()
// console.log(list.isEmpty())
