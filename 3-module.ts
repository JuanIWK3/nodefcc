require('./7-mind-grenade.ts')

const names = require('./4-names.ts');
const sayHi = require('./5-utils.ts');
const data = require('./6-alternative.ts')

sayHi('Juan')
sayHi(names.peter)
sayHi(names.john)
sayHi(data.singlePerson.name)
