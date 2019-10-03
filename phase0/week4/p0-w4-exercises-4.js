function push(arr, item) {
  arr[arr.length] = item
}

function objectValues(obj) {
  let result = []

  for (let key in obj) push(result, obj[key])

  return result
}

function objectEntries(obj) {
  let result = []

  for (let key in obj) push(result, [key, obj[key]])
  
  return result
}

function sort(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (cb(arr[i], arr[j])) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
}

function cariModus(arr) {
  // you can only write your code here!
  // let temp = arr.reduce((a, v) => {
  //   if (!a[v]) a[v] = 0
  //   a[v] += 1
  //   return a
  // }, {})
  //
  // return Object.values(temp).every((v, _, ar) => v === ar[0]) ?
  //   -1 :
  //   [...Object.entries(temp)].sort((a, b) => a[1] < b[1])[0][0]

  let tempObj = {}
  for (let num of arr) {
    if (!tempObj[num]) tempObj[num] = 0
    tempObj[num] += 1
  }

  let tempValue = objectValues(tempObj)
  let tempEntries = objectEntries(tempObj)
  let findModus = false

  for (let i = 0; i < tempValue.length; i++) {
    if (tempValue[i] !== tempValue[0]) findModus = true
  }

  if (findModus) {
    sort(tempEntries, (a, b) => a[1] < b[1])
    return tempEntries[0][0]
  } else {
    return -1
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
