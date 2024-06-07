const arr = [11, 2, 43, 45, 5];
let t = 0;

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      t = arr[j];
      arr[j] = arr[i];
      arr[i] = t;
    }
  }
}

for (let i of arr) {
  console.log(i);
}
