//DFS
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  // recursive DFS
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

//BFS

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let maxDepth = 0;
  const queue = [];
  //Add root to the queue
  queue.push(root);
  //Loop through queue while it's not empty
  while (queue.length > 0) {
    //Calculate the size of the queue
    let size = queue.length;
    //Loop through the queue
    while (size > 0) {
      //Pop the first element of the queue
      let node = queue.shift();
      //Add the left and right children of the node to the queue
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      //Decrement size
      size--;
    }
    //Increment maxDepth
    maxDepth++;
  }
  //Return maxDepth
  return maxDepth;
};
