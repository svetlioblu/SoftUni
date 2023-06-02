
// As alternative create modular router as new instance. More fancy and clear way
const express = require('express')
const router = express.Router()
const cubeManager = require('../managers/cubeManager')

router.get('/', async (req, res) => {
    const { search, from, to } = req.query

    const cubes = await cubeManager.getAll(search, from, to)
   
    res.render('home', { cubes, search, from, to })
})

router.get('/about', (req, res) => {
    res.render('about')
})

router.get('/404', (req, res) => {
    res.render('404')
})

module.exports = router
