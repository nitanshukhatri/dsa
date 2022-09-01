const input = ["A2D", "1B", "3F5", "67FE2", "AA"];
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let result = [];
for (let i = 0; i < input.length; i++) {
  let innerArray = input[i];
  console.log(innerArray);
  const filtered = innerArray.match(/\d+/g);
  result.push(filtered);
}
console.log(result);
// output [2, 1, 3, 5, 67, 2]
