const router = require('express').Router()

router.get('/create', (rec, res) => {
    res.render('accessory/create')
})

router.post('/create', (req, res) => {
    const { name, description, imageUrl } = req.body

    res.redirect('/')
})

module.exports = router 