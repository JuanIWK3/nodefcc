const names = require('./names');
const sayHi = require('./utils.js');
const data = require('./alternative')
require('./mindgrenade')

sayHi('Juan')
sayHi(names.peter)
sayHi(names.john)
sayHi(data.singlePerson.name)
