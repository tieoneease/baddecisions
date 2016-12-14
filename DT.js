let fs = require('fs')

//fs.appendFile(process.argv[2], '\r\n@end', function (err) {
  //console.log('errored')
//});

fs.readFile(process.argv[2], 'utf8', ( err, data ) => {
  if (err)
    return console.log(err);

  let features = []
  let trainingData = []
  let count = 0;

  data.split('\n').forEach(line => {
    let firstChar = line[0]
    switch (firstChar) {
      case '%':
        break;

      case '@':
        let fields = line.split(' ')
        if (fields[0] === '@attribute')
          features.push(fields[1])
        break;

      default:
        let objectAttributesArray = line.trim().split(',')
        if (objectAttributesArray.length > 1) {
          var obj = {}
          objectAttributesArray.forEach((attribute, index) => {
            var attributeOnObject = features[index]
            obj[attributeOnObject] = attribute
          })
          trainingData.push(obj)
        }
    }
  })
  let targetClass = features.pop()
  let dt = new DecisionTree(trainingData, targetClass, features);
  let treeModel = convertNode(dt.toJSON())
  console.log(prettyPrint(treeModel));
});



  /*

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

let features = [
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

*/

function partrtion(nodeSet) {
  let attributeMap = generateMap(nodeSet);
  var noSplit = true;
  attributeMap.forEach(function(attribute){
    attribute.forEach(function(symbol){
      if(symbol.length() != nodeSet.length()){
        noSplit = false;
      }
    });
  });
  if(noSplit){
    return;
  }
  // TODO: calculate max entropy
  levels.push(maxEntropyAttribute);
  for (var key in attributeMap[maxEntropyAttribute]) {
    if (!attributeMap[maxEntropyAttribute].hasOwnProperty(key)) continue;
    var obj = attributeMap[maxEntropyAttribute][key];
    tree[maxEntropyAttribute][key] = partition(obj); 
  }
}

//let calculateMaxEntropyAttribute = (attributeMap) => {
  //Object.keys(attributeMap).forEach(attribute = > {
  //})
//}

// for every object line
// split by ','
// obj.features[index] = value


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
//
let DecisionTree = require('decision-tree')

let prettyPrint = json => JSON.stringify(json, null, 2)

let convertNode = node => {
  var newNode = {
    name: node.name,
  }
  if ('vals' in node)
    newNode.vals = node.vals.map(val => convertNode(val))
  if ('child' in node)
    newNode.child = convertNode(node.child)
  return newNode;
}
