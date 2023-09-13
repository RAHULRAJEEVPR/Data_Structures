class Graph {
  constructor() {
    this.graph = new Map();
  }
  addVertex(vertex) {
    this.graph.set(vertex, new Array());
  }
  insert(vertex, edge, isBiDirectional) {
    if (!this.graph.has(vertex)) {
      this.addVertex(vertex);
    }
    if (!this.graph.has(edge)) {
      this.addVertex(edge);
    }
    this.graph.get(vertex).push(edge);
    if (isBiDirectional) {
      this.graph.get(edge).push(vertex);
    }
  }
  delete(vertex) {
    if (this.graph.has(vertex)) {
      let edges = this.graph.get(vertex);

      for (let edge of edges) {
        this.graph.get(edge).splice(this.graph.get(edge).indexOf(vertex), 1);
      }
      this.graph.delete(vertex);
    }
  }
  display() {
    for (let vertex of this.graph.keys()) {
      let edges = this.graph.get(vertex);
      console.log(vertex, edges);
    }
  }
  dfs(startVertex) {
    let visited = new Set();
    const dfsHelper = (vertex) => {
      visited.add(vertex);
      console.log(vertex);
      let neighbors = this.graph.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };
    dfsHelper(startVertex);

  }
  bfs(startVertex){
    let visited=new Set()
    let queue=[]
    visited.add(startVertex)
    queue.push(startVertex)
    while(queue.length>=0){
        let vertex=queue.shift()
        console.log(vertex);

        let neighbors=this.graph.get(vertex)
        if(neighbors){

          for(let neighbor of neighbors){
              if(!visited.has(neighbor)){
                  visited.add(neighbor)
                  queue.push(neighbor);
 
              }
          }
        }
    }
  }
}
const gp = new Graph();

gp.insert(1, 22, true);
gp.insert(4, 66, true);
gp.insert(1, 44, true);


gp.display()
