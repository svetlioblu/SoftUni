const util = require('util')
const jwt = require('jsonwebtoken')
//util converts callback functions to promise based functions
const jwtPromises = {
    sign: util.promisify(jwt.sign),
    verify: util.promisify(jwt.verify),
}

module.exports = jwtPromises


