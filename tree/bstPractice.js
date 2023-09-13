class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
  insertNode(root, Node) {
    if (Node.value < root.value) {
      if (!root.left) {
        root.left = Node;
      } else {
        this.insertNode(root.left, Node);
      }
    } else {
      if (!root.right) {
        root.right = Node;
      } else {
        this.insertNode(root.right, Node);
      }
    }
  }
  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value == value) {
      return true;
    }
    if(value<root.value){
    return  this.search(root.left,value)
    }else{
      return this.search(root.right,value)
    }
  }
  inOrder(root){
      if(root){
        this.inOrder(root.left)
      console.log(root.value);
      this.inOrder(root.right)
      }
  }
  levelOrder(root){
    let queue=[]
    if(!root){
      return root
    }
    queue.push(this.root)
    while(queue.length){
let curr=queue.shift() 
console.log(curr.value);
if(curr.left){
  queue.push(curr.left)
}
if(curr.right){
  queue.push(curr.right)
}
}
  }

  delete(value){
    this.root=this.deleteNode(this.root,value)
  }
  deleteNode(root,value){
    if(root==null){
      return root
    }
    if(value<root.value){
      root.left=this.deleteNode(root.left,value)
    }else if(value>root.value){
      root.right=this.deleteNode(root.right,value)
    }else{
        if(!root.left &&!root.right){
          return null
        }
        if(!root.left){
          return root.right
        }
        if(!root.right){
          return root.left
        }
        root.value=this.min(root.right)
        root.right=this.deleteNode(root.right,root.value)
    }
    return root
  }
}

const bst = new BST();
bst.insert(10);
bst.insert(20);
bst.insert(5);
bst.insert(55);
bst.insert(34);
bst.insert(2);
bst.delete(20)
bst.levelOrder(bst.root)