const arr = [1, 5, 3, 6, 2, 4, 4, 7];
//1,7
//4,4
//5,3
//6,2

function getPairs(arr, max) {
  map = {};
  ans = 0;
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    const diff = max - arr[i];
    if (map[diff]) {
      output.push([arr[i], diff]);
      ans += map[diff];
    } else {
      if (map[arr[i]]) {
        map[arr[i]]++;
      } else {
        map[arr[i]] = 1;
      }
    }
  }
  console.log(map);
  console.log(ans);
  console.log(output);
}

getPairs(arr, 8);
