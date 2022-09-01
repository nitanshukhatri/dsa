//https://www.youtube.com/watch?v=3wUa7Lf1Xjk&ab_channel=AlgorithmsMadeEasy
//https://leetcode.com/problems/gas-station/
const canCompleteCircuit = (gas, cost) => {
  let position = 0;
  let sum = 0;
  let total = 0;
  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];
    if (sum < 0) {
      total += sum;
      sum = 0;
      position = i + 1;
    }
  }
  total += sum;
  return total >= 0 ? position : -1;
};

console.log([1, 2, 3, 4, 5][(3, 4, 5, 1, 2)]);
