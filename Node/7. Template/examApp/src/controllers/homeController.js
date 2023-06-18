const router = require('express').Router()

router.get('/', (req, res) => {

    res.render('home')
})

// handle /404 in the browser bar
router.get('/404', (req, res) => {
    //res.render('404')
    res.send('404 error')
})


module.exports = router