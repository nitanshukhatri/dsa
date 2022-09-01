function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

function promiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p) => {
      p.then((res) => {
        result.push(res);
        if (result.length === promises.length) {
          resolve(result);
        }
      }).catch((err) => reject(err));
    });
  });
}
promiseAll([showText("hello", 1000), Promise.resolve("hi")]).then((val) => {
  console.log(val);
});
