//https://www.youtube.com/watch?v=lxTGsVXjwvM&ab_channel=takeUforward
var inorderTraversal = function (root) {
  //    return root ?
  //         [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)] : [];
  let result = [];
  let stack = [];
  let current = root;
  while (current !== null || stack.length !== 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};
