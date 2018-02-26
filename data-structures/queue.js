// Queue using array
function Queue() {
  this.head = 0;
  this.storage = [];
}

// Enqueue (.push) an element to the end of storage
Queue.prototype.enqueue = function(value) {
  if (!value) {
    return 'Submit a value'
  } else {
    this.storage.push(value)
    return this.storage
  }
}

// Dequeue (.pop) the first element of storage
Queue.prototype.dequeue = function() {
  if (this.storage.length > 1) {
    this.storage.splice(0, 1)
    return this.storage
  }
}

var queue = new Queue()
console.log(queue.enqueue(1))
console.log(queue.enqueue(2))
console.log(queue.enqueue(3))
console.log(queue.enqueue(4))
console.log(queue.dequeue())


// Queue using an object as storage:

function Queue() {
  this.storage = {};
  this.head = 0;
  this.tail = 0;
}

Queue.prototype.enqueue = function(val) {
  this.storage[this.tail++] = val
}

Queue.prototype.dequeue = function() {
  var element = this.storage[this.head];
  delete this.storage[this.head];
  if (this.head < this.tail) {
    this.head++
  }
  return element
}

Queue.prototype.count = function() {
  return this.tail - this.head;
}

Queue.prototype.peek = function() {
  return this.storage[this.head]
}
