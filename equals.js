const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== "object" && typeof b !== "object")) return a === b;
  if (a.prototype !== b.prototype) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((k) => equals(a[k], b[k]));
};

const compareObjects = (a, b) => {
  if (a === b) return true;

  if (typeof a != "object" || typeof b != "object" || a == null || b == null) return false;

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key)) return false;

    if (typeof a[key] === "function" || typeof b[key] === "function") {
      if (a[key].toString() != b[key].toString()) return false;
    } else {
      if (!compareObjects(a[key], b[key])) return false;
    }
  }

  return true;
};

const a = { name: "John", age: 26 };
const b = { name: "John", age: 26 };

equals(a, b); // true

const c = { name: "John" };
const d = { name: "John", age: undefined };

equals(c, d); // false
