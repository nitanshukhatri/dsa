// https://www.youtube.com/watch?v=s9fokUqJ76A&ab_channel=NeetCode
const validParenthesis = (n) => {
  let stack = [];
  let res = [];
  function backtrack(open, close) {
    if (open == close && open == n) {
      res.push(stack.join(""));
    }
    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }
    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }
  }
  backtrack(0, 0);
  return res;
};
console.log(validParenthesis(3));
