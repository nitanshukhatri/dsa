//https://www.youtube.com/watch?v=Y0lT9Fck7qI&ab_channel=NeetCode
//like fibonnaci start from right;

//0,1,2,3,4,5 -> steps

//8,5,3,2,1,1
//        <-

var climbStairs = function (n) {
  let right = 1;
  let left = 1;
  for (let i = n; i <= 0; i--) {
    let temp = right;
    left = left + right;
    right = temp;
  }

  return left; // as number of possibilities
};
