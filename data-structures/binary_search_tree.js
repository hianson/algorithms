// bst methods:
// add
// remove
// isPresent (bool)
// min
// max
// find (in: data, out: node)

// The Greatest Binary Search Tree of All Time:

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // methods

  // .add
  add(data) {
    // check if tree is empty
    const node = this.root

    if (node === null) {
      this.root = new Node(data)
      return
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data)
            return
          } else {
            return searchTree(node.left)
          }
        } else {
          if (node.right === null) {
            node.right = new Node(data)
          } else {
            return searchTree(node.right)
          }
        }
      }
      searchTree(node)
    }
  }

  isPresent(data) {
    let current = this.root

    while (current) { // while root exists
      // if data = current.data, return true
      if (data === current.data) return true
      // if data is less than root, current is left
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }

}


const bst = new BST;

bst.add(2)
bst.add(1)
bst.add(1)
bst.add(3)
bst.add(2)
bst.add(5)

// bst.isPresent(1)

console.log(bst)


//     2
//    / \
//   1   3
//  / \
// 0   4
