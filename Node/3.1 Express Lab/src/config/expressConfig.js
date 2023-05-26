const express = require('express')

function expressConfig(app) {
    //express config to get static files
    app.use(express.static('src/assets'))
    // express config middlewear to parse post requests as object
    app.use(express.urlencoded({ extended: false }))
}
module.exports = expressConfig