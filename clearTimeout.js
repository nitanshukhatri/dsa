const TIMER_UTIL = {
  timerArr: [],
  setTimeout: function (fn, delay) {
    const id = setTimeout(fn, delay);
    this.timerArr.push(id);
  },
  clearTimeout: function () {
    while (this.timerArr.length) {
      clearTimeout(this.timerArr.pop());
    }
  },
};
TIMER_UTIL.setTimeout(() => console.log("first"), 1000);
TIMER_UTIL.clearTimeout();
