function bandingkanAngka(angka1, angka2) {
  // you can only write your code here!
  if (angka1 < angka2) {
    return true;
  };

  if (angka1 > angka2) {
    return false;
  };

  if (angka1 === angka2) {
    return -1;
  };

  return `Something wrong happen when angka1 = ${angka1} & angka2 = ${angka2}`;
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
