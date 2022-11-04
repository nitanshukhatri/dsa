function capitalize(sentence) {
  return sentence
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
}

console.log(capitalize("hi there"));
