class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    // Insert a node in the binary tree
    insert(data) {
      const newNode = new Node(data);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this.insertNode(this.root, newNode);
      }
    }
  
    // Helper method to insert a node in the binary tree
    insertNode(node, newNode) {
      if (newNode.data < node.data) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this.insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this.insertNode(node.right, newNode);
        }
      }
    }
  
    // Traverse the binary tree in pre-order
    preOrder(node) {
      if (node !== null) {
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
      }
    }
  
    // Traverse the binary tree in in-order
    inOrder(node) {
      if (node !== null) {
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
      }
    }
  
    // Traverse the binary tree in post-order
    postOrder(node) {
      if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
      }
    }
  }
  