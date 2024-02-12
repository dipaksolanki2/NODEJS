const os = require('os');

const systemUpTime = os.uptime()
const userInfo = os.userInfo()

const otherInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(systemUpTime);
console.log(userInfo);
console.log(otherInfo);