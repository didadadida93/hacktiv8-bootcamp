function push(arr, item) {
  arr[arr.length] = item
}

function find (arr, cb) {
  let temp = null

  for (i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      temp = arr[i]
      break
    }
  }
  
  return temp
}

function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  if (shoppers.length === 0) {
    return []
  }

  // transform nested list to list of object
  // listBarang = listBarang.reduce((a, item) => {
  //   a.push({
  //     name: item[0],
  //     price: item[1],
  //     leftOver: item[2],
  //     shoppers: [],
  //     profit: 0
  //   })
  //   return a
  // }, [])

  // transform nested list to list of object
  for (let i = 0; i < listBarang.length; i++) {
    let temp = listBarang[i]
    listBarang[i] = {
      name: temp[0],
      price: temp[1],
      leftOver: temp[2],
      shoppers: [],
      profit: 0
    }
  }

  // update listBarang based on shoppers list
  // shoppers.map(shopper => {
  //   let item = listBarang.find(item => item.name === shopper.product)
  //   if (item) {
  //     if (item.leftOver >= shopper.amount) {
  //       item.leftOver -= shopper.amount
  //       item.profit += shopper.amount * item.price
  //       item.shoppers.push(shopper.name)
  //     }
  //   }
  // })

  // update listBarang based on shoppers list
  for (let shopper of shoppers) {
    let item = find(listBarang, item => item.name === shopper.product)
    if (item) {
      if (item.leftOver >= shopper.amount) {
        item.leftOver -= shopper.amount
        item.profit += shopper.amount * item.price
        item.shoppers.push(shopper.name)
      }
    }
  }

  // return listBarang.map(item => {
  //   return {
  //     product: item.name,
  //     shoppers: item.shoppers,
  //     leftOver: item.leftOver,
  //     totalProfit: item.profit,
  //   }
  // })

  let result = []
  for (let item of listBarang) {
    push(result, {
      product: item.name,
      shoppers: item.shoppers,
      leftOver: item.leftOver,
      totalProfit: item.profit,
    })
  }

  return result
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
