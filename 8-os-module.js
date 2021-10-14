const os = require('os')

// info about current user

const user = os.userInfo()
console.log(user);

// method returns the system uptime in seconds

console.log(`The Sytem Uptime is ${os.uptime()} seconds`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1048576
  ,
  freeMemory: os.freemem() / 1024 / 1024,
}

console.log(currentOs);