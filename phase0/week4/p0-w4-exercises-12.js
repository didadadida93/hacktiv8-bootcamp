function makeReportObject(logPurchasing, dataBarang) {
  let reportObject = {}
  for (let barang of dataBarang) {
    let log = {}
    log['product'] = barang.name
    log['shoppers'] = []
    log['leftOver'] = barang.stock
    log['totalProfit'] = 0
    log['price'] = barang.price
    reportObject[barang.name] = log
  }

  for (let data of logPurchasing) {
    reportObject[data.productName]['shoppers'].push(data.buyer)
    reportObject[data.productName]['totalProfit'] += data.amount * reportObject[data.productName]['price']
  }

  return reportObject
}

function makeReport(reportObject) {
  let result = []
  for (let key in reportObject) {
    let log = {}
    log['product'] = reportObject[key].product
    log['shoppers'] = reportObject[key].shoppers
    log['leftOver'] = reportObject[key].leftOver
    log['totalProfit'] = reportObject[key].totalProfit
    result.push(log)
  }
  return result
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
  let listObjectBarang = []
  for (let data of listBarang) {
    listObjectBarang.push({'name': data[0], 'price': data[1], 'stock': data[2]})
  }

  let logPurchasing = []

  for (let data of shoppers) {
    for (let barang of listObjectBarang) {
      if (data.product === barang.name && barang.stock >= data.amount) {
        // substract stock from listObjectBarang based on data.amount
        barang.stock -= data.amount
        logPurchasing.push({'productName': data.product, 'buyer': data.name, 'amount': data.amount})
      }
    }
  }

  let reportObject = makeReportObject(logPurchasing, listObjectBarang)

  return makeReport(reportObject)
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
