let count = 0;

function getData() {
  console.log("fetching Data" + count++);
}

function debounce(fn, time) {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, time);
  };
}

debounce(getData, 1000);
