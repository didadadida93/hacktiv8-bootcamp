// soal nomor 1
function firstLooping(c) {
  // function for first looping
  while (c <= 20) {
    console.log(`${c} - I love coding`);
    c += 2;
  }
  return c
}

function secondLooping(c) {
  // function for second looping
  while(c >= 2) {
    console.log(`${c} - I will become fullstack developer`);
    c -= 2;
  }
  return c
}

let foo = 2;

for (let i of [`LOOPING PERTAMA`, `LOOPING KEDUA`]) {
  console.log(i);
  if (foo === 22) {
    foo -= 2;
    foo = secondLooping(foo);
    continue;
  }
  foo = firstLooping(foo);
}


// soal nomor 2
function firstLooping() {
  // function for first looping
  for (let i = 1; i <= 20; i++) {
    console.log(`${i} - I love coding`);
  }
}

function secondLooping() {
  // function for second looping
  for (let i = 20; i >= 1; i--) {
    console.log(`${i} - I will become fullstack developer`);
  }
}

for (let i of [[`LOOPING PERTAMA`, firstLooping], [`LOOPING KEDUA`, secondLooping]]) {
  console.log(i[0]);
  i[1]();
}


// soal nomor 3
function counterList(c=1) {
  // create and return a list of number and the step based on c
  // by default, c is 1 so it will return list of number 1 - 100
  let result = [];
  for (let i = 1; i <= 100; i += c) {
    result.push(i);
  };
  return result;
}

function printGanjilGenap(n) {
  // check if n is even or odd and print it
  if (n % 2 === 0) {
    console.log(`GENAP`);
  } else {
    console.log(`GANJIL`);
  }
}

for (let i of [1, 2, 5, 9]) {
  if (i === 1) {
    for (let n of counterList()) {
      printGanjilGenap(n);
    };
    continue;
  };
  for (let n of counterList(i)) {
    if (n % (i + 1) === 0) {
      console.log(`${n} kelipatan ${i + 1}`);
    }
  }
}

