function length(map) {
  // count how much key-value pair that exists inside this map
  let c = 0
  for (let _ in map) {
    c += 1
  }
  return c
}

function yangPalingSeringMuncul(map) {
  let jumlahMuncul = 0
  let result = null

  for (let n in map) {
    if (map[n] > jumlahMuncul) {
      jumlahMuncul = map[n]
      result = n
    }
  }

  if (result === '1') { // it seems all element just appear once
    return -1
  }

  return result
}

function cariModus(arr) {
  // you can only write your code here!
  let tabelKemunculan = new Map()
  for (let number of arr) {
    if (!(number in tabelKemunculan)) {
      tabelKemunculan[number] = 0
    }
    tabelKemunculan[number] += 1
  }

  let tabelLength = length(tabelKemunculan)
  if (tabelLength === 1) {
    return -1
  }
  return yangPalingSeringMuncul(tabelKemunculan)
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
