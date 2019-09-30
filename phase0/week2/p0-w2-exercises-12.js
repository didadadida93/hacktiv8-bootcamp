function konversiMenit(detik) {
  // you can only write your code here!
  // return `${Math.floor(detik / 60)}:${detik % 60 < 10 ? '0' + detik % 60 : detik % 60}`
  let second = detik % 60

  if (second < 10) {
    second = '0' + second
  }
  return `${Math.floor(detik / 60)}:${second}`
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
