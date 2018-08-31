const fs = require('fs');
const path = require('path');
const ajax = (url,succ) => {
    setTimeout(() => {
      succ(fs.readFileSync(path.resolve(__dirname,'../../data.json')))
    },1000)
}

module.exports = ajax
