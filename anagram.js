//You have a string "CAT" fin its anagram from the given set of strings

//['ACT', 'TAC', 'DOG', 'TCA', 'BOB', 'JUM']

//Ans: ACT, TAC, TCA

const arr = ["ACT", "TAC", "DOG", "TCA", "BOB", "JUM"];

function findAnagram(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const sorted = arr[i].split("").sort().join("");
    console.log(arr[i].split("").sort());
    if (map[sorted]) {
      map[sorted].push(arr[i]);
    } else {
      map[sorted] = [arr[i]];
    }
  }
  console.log(map);
}

findAnagram(arr);
