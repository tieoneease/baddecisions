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

// get all objects
// generate map schema
let attributeMap = {
  color: {
    YELLOW: [],
    PURPLE: []
  },
  size: {
    LARGE: [],
    SMALL: []
  },
  act: {
    STRETCH: [],
    DIP: []
  },
  age: {
    ADULT: [],
    CHILD: []
  },
  inflated: {
    T: [],
    F: []
  },
}
