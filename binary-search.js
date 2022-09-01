function f(a, x) {
  if (a == null || a.length == 0) return -1;
  let answer = -1;
  let low = 0;
  let high = a.length - 1;
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    if (a[mid] == x) {
      return x;
    } else if (a[mid] < x) {
      answer = a[mid];
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return answer;
}
// Given a positive sorted array
// Define a function f(a, x) that returns x, the next smallest number, or -1 for errors.

// const a = [3, 4, 6, 9, 10, 12, 14, 15, 17, 19, 21];
// console.log(f(a, 78));

var searchBST = function (root, val) {
  if (root === null) return null;
  if (val === root.val) return root;
  else if (val < root.val) return searchBST(root.left, val);
  else return searchBST(root.right, val);
};
const a = [4, 2, 7, 1, 3];
console.log(searchBST(a, 2));
