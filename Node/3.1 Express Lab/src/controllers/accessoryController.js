const router = require('express').Router()

router.get('/create', (rec, res) => {
    res.render('accessory/create')
})

module.exports = router 