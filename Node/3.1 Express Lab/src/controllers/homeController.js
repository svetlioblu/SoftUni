//named common js export. Can be used in index.js as acton in app.get(',', ...)
// exports.getHome = (req, res) => {
//     res.render('home')
// }   

// As alternative create modular router as new instance. More fancy and clear way
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/about', (req, res) => {
    res.render('about')
})
module.exports = router
