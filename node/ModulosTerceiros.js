const _ = require('lodash')

setInterval(() => {
    console.log(_.random(1, 5000))
}, 2000)

