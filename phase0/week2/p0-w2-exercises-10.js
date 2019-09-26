function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  return angka1 > angka2 ? false : angka1 < angka2 ? true : angka1 === angka2 ? -1 : `something wrong happen when angka1 = ${angka1} & angka2 = ${angka2}`
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
