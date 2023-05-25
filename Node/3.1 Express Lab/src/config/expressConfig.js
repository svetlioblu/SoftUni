const express = require('express')

function expressConfig(app) {
    //express config
    app.use(express.static('src/assets'))
}
module.exports = expressConfig