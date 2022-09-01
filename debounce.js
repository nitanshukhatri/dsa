let count = 0;

function getData() {
  console.log("fetching Data" + count++);
}

function debounce(fn, time) {
  let timer;
  return function () {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, time);
  };
}

debounce(getData, 1000);
