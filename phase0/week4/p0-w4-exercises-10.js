function changeMe(arr) {
  // you can only write your code here!
  // arr.map((v, i) => {
  //   let date = new Date()
  //   let tempObj = {
  //     firstName: v[0],
  //     lastName: v[1],
  //     gender: v[2],
  //     age: v[3] ? date.getFullYear() - v[3] : 'Invalid Birth Year'
  //   }
  //   console.log(`${i + 1}. ${tempObj.firstName} ${tempObj.lastName}:`)
  //   console.log(tempObj)
  // })
  
  let date = new Date()
  for (let i = 0; i < arr.length; i++) {
    let tempObj = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3] ? date.getFullYear() - arr[i][3] : 'Invalid Birth Year'
    }
    console.log(`${i + 1}. ${tempObj.firstName} ${tempObj.lastName}:`)
    console.log(tempObj)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
