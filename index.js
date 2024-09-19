class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  _getNextKey(value, pointerValue) {
    return value > pointerValue ? 'right' : 'left';
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }

    let pointer = this.root
    while (pointer) {
      const nextKey = this._getNextKey(value, pointer.value);
      const nextPointer = pointer[nextKey];
      if (!nextPointer) {
        pointer[nextKey] = newNode
      }
      pointer = nextPointer;
    }

    return newNode;
  }
  lookup(value) {
    let pointer = this.root;
    while (pointer) {
      console.log(pointer)
      if (pointer.value === value) {
        return pointer;
      }

      const nextKey = this._getNextKey(value, pointer.value);
      const nextPointer = pointer[nextKey];

      if (!nextPointer) {
        return null;
      }

      pointer = nextPointer;

    }
  }

  remove(value) {

  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.insert(30);
tree.remove(170);
JSON.stringify(traverse(tree.root));
// console.log(tree.lookup(20));
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}