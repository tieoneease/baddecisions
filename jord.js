let fs = require('fs')

fs.readFile(process.argv[2], 'utf8', (err,data) => {
  if (err)
    return console.log(err);

  data.split('\n').forEach(line => {
    let firstChar = line[0]
    switch (firstChar) {

      case '%':
        break;

      case '@':
        let fields = line.split(' ')
        break;

      default:
        //console.log('fuk you')
    }
  })
});


let processFields = (fields) => {
  fields.forEach(field => {
    if (field[0] === '@attribute') {

    }
  })
}

let processData = (data) => {

}

// filestream
// generate map schema
let attributeMap = {
  color: {
    YELLOW: [nodes],
    PURPLE: [nodes]
  },
  size: ['LARGE', 'SMALL' ],
  act: ['STRETCH', 'DIP' ],
  age: ['ADULT', 'CHILD' ],
  inflated: ['T', 'F' ]
}

let attributeSchema = [
  color
  size
  act
  age
  inflated
]

let obj = {
  color: 'YELLOW',
  size: 'SMALL'
}

// for every object line
// split by ','
// obj.attributeSchema[index] = value


// POST DATA PROCESSING
// loop through objects
// GENERATE MAP
// for every object property, attributeMap[attribute][objectProperty].push(obj)
//
// CHECK BASE CASE
// n = object count
// BOOL NOSPLIT = true
// for every attribute in attributeMap, 
//  for every symbol per attribute, check array of nodes size. if != N, NOSPLIT to false
// CALCULATE MAX ENTROPY
//
// MEORders.push(MEattribute)
// build subtrees
// attributemap.forEach(MEattribute) {
//  object.keys(attributeMap[MEattribute]).forEach(symbol) {
//     Tree[MEattribute][symbol] = partition(attributeMap[MEattribute][symbol])
//  }
// }
//
// rebuildtree(orders, tree)
