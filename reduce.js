//The callback is your ‘reducer’, which takes 4 arguments, the accumulator, currentValue, index and array.
const numbers = [1, 2, 3];

const sumReducer = (initialValue, current) => initialValue + current;

const sumOfNumbersNative = numbers.reduce(sumReducer, 0);

console.log("Native reduce function, " + sumOfNumbersNative);

const reduce = (reducer, initialValue, array) => {
  let value = initialValue;

  for (let i = 0; i < array.length; i++) {
    let currentValue = array[i];
    value = reducer(value, currentValue);
  }

  return value;
};
const sumOfNumbersCustom = reduce(sumReducer, 0, numbers);
