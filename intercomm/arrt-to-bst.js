// https://www.youtube.com/watch?v=0K0uCMYq5ng&ab_channel=NeetCode
// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/description/
var sortedArrayToBST = function (nums) {
  return constructBST(0, nums.length - 1);

  function constructBST(left, right) {
    // base case
    if (left > right) return null;
    if (left == right) return new TreeNode(nums[left]);

    const mid = left + Math.floor((right - left) / 2);
    const root = new TreeNode(nums[mid]);
    root.left = constructBST(left, mid - 1);
    root.right = constructBST(mid + 1, right);

    return root;
  }
};
