function calcularModa(arr) {
  const obj = {};
  arr.map((el) => {
    obj[el] = obj[el] ? obj[el] + 1 : 1;
  });
  let moda;
  let maxCount = 0;
  for (const key in obj) {
    if (obj[key] > maxCount) {
      moda = key;
      maxCount = obj[key];
    }
  }
  return moda;
}
