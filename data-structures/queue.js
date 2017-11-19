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
