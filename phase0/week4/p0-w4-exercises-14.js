function push(arr, item) {
  arr[arr.length] = item
}

function indexOf(arr, item) {
  let temp = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      temp = i
      break
    }
  }

  return temp
}

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  // return arrPenumpang.reduce((a, data) => {
  //   a.push({
  //     penumpang: data[0],
  //     naikDari: data[1],
  //     tujuan: data[2],
  //     bayar: 2000 * Math.abs(rute.indexOf(data[1]) - rute.indexOf(data[2])),
  //   })
  //   return a
  // }, [])

  let result = []
  
  for (let data of arrPenumpang) {
    push(result, {
      penumpang: data[0],
      naikDari: data[1],
      tujuan: data[2],
      bayar: 2000 * Math.abs(indexOf(rute, data[1]) - indexOf(rute, data[2])),
    })
  }

  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
