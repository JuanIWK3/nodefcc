require('./7-mind-grenade.js')

const names = require('./4-names.js');
const sayHi = require('./5-utils.js');
const data = require('./6-alternative.js')

sayHi('Juan')
sayHi(names.peter)
sayHi(names.john)
sayHi(data.singlePerson.name)
