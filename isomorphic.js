let isomorphic = (s, t) => {
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    if (obj1[s[i]] !== obj2[t[i]]) {
      return false;
    } else {
      obj1[s[i]] = i;
      obj2[t[i]] = 1;
    }
  }
  console.log(obj1, obj2);
};

isomorphic("egg", "add");
