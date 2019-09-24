function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  let result = []
  for (let data of arrPenumpang) {
    let obj = {}
    obj.penumpang = data[0]
    obj.naikDari = data[1]
    obj.tujuan = data[2]
    obj.bayar = 2000 * (Math.abs(rute.indexOf(data[1]) - rute.indexOf(data[2])))
    result.push(obj)
  }
  return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
