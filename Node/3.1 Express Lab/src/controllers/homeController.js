
// As alternative create modular router as new instance. More fancy and clear way
const express = require('express')
const router = express.Router()
const cubeManager = require('../managers/cubeManager')

router.get('/', (req, res) => {
    const cubes = cubeManager.getAll()
    res.render('home', { cubes })

})

router.get('/about', (req, res) => {
    res.render('about')
})

module.exports = router
