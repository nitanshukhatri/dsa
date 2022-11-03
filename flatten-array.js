let res = [];
function flatten(value) {
  const copy = value.slice();
  for (let i = 0; i < copy.length; i++) {
    if (Array.isArray(value[i])) {
      flatten(value[i]);
    } else {
      res.push(value[i]);
    }
  }
  return res;
}
// const flatten = (nested) => {
//   const flat = [];
//   const handleFlat = (array) => {
//     let counter = 0;
//     while (counter < array.length) {
//       const val = array[counter];
//       if (Array.isArray(val)) {
//         handleFlat(val);
//       } else {
//         flat.push(val);
//       }
//       counter++;
//     }
//   };
//   handleFlat(nested);
//   return flat;
// };
console.log(flatten([1, [2, [3, [4, [5]]]]]));
