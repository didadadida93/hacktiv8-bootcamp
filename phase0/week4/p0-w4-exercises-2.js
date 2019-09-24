function faktorPengali(number) {
  // find num that can divide with number
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      result.push(i)
    }
  }
  return result;
}

function fpb(angka1, angka2) {
  // you can only write your code here!
  let faktorPengaliAngka1 = faktorPengali(angka1);
  let faktorPengaliAngka2 = faktorPengali(angka2);

  if (faktorPengaliAngka1.length > faktorPengaliAngka2.length) {
    let length = faktorPengaliAngka1.length;
  };

  if (faktorPengaliAngka1.length < faktorPengaliAngka2.length) {
    let length = faktorPengaliAngka2.length;
    faktorPengaliAngka1, faktorPengaliAngka2 = faktorPengaliAngka2, faktorPengaliAngka1;
  };

  let found = false;
  let temp = null;
  while (!found) {
    temp = faktorPengaliAngka1.pop();
    if (faktorPengaliAngka2.indexOf(temp) !== -1) {
      found = true;
    }
  }
  return temp
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
