// https://leetcode.com/problems/flood-fill/description/
//https://www.youtube.com/watch?v=7aikf56h9Gs&t=757s&ab_channel=HelloWorld
//intercom
var isValid = function (image, sr, sc, n, m, color) {
  // checking out of bound error
  if (sr >= 0 && sr < n && sc >= 0 && sc < m && image[sr][sc] == color) {
    return true;
  } else {
    return false;
  }
};
var floodFillRec = function (image, sr, sc, n, m, color, newColor) {
  image[sr][sc] = newColor;
  if (isValid(image, sr + 1, sc, n, m, color)) {
    floodFillRec(image, sr + 1, sc, n, m, color, newColor);
  }
  if (isValid(image, sr, sc + 1, n, m, color)) {
    floodFillRec(image, sr, sc + 1, n, m, color, newColor);
  }
  if (isValid(image, sr - 1, sc, n, m, color)) {
    floodFillRec(image, sr - 1, sc, n, m, color, newColor);
  }
  if (isValid(image, sr, sc - 1, n, m, color)) {
    floodFillRec(image, sr, sc - 1, n, m, color, newColor);
  }
};
var floodFill = function (image, sr, sc, newColor) {
  // sr -> source row sc->source column
  let n = image.length;
  let m = image[0].length;
  let color = image[sr][sc];

  if (color === newColor) {
    return image;
  }
  floodFillRec(image, sr, sc, n, m, color, newColor);
  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
