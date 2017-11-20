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

var list = new LinkedList()
list.print()
list.prepend(5)
list.prepend(10)
list.prepend(15)
list.print()
// console.log(list.isEmpty())
