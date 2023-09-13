class TrieNode{
  constructor(){
    this.childrens=new Map()
  }
}

class Trie{
  constructor(str){
    this.root=new TrieNode()
    this.endSymbol="*"

    if(str){
      for(let i=0;i<str.length;i++){
        this.insertSubString(i,str)
      }
    }
  }
  insertSubString(index,str){
    let node=this.root
    for(let i=index;i<=str.length;i++){
      let letter=str.charAt(i)
      if(!node.childrens.has(letter)){
        node.childrens.set(letter,new TrieNode())
      }
      node=node.childrens.get(letter)
    }
    node.childrens.set(this.endSymbol,null)
  }

  contain(str){
    let node=this.root
    for(let i=0;i<str.length;i++){
     let letter=str.charAt(i)
    if(!node.childrens.has(letter)){
      return false
    }{
      node=node.childrens.get(letter)
    }
    }
    if(node.childrens.has(this.endSymbol)){
      return true
    }
  }
}

const trie=new Trie("rahul")

console.log(trie);