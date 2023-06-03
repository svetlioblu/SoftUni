const router = require('express').Router()

const accessoryManager = require('../managers/accessoryManager')
//get form
router.get('/create', (rec, res) => {
    res.render('accessory/create')
})
//value from the form
router.post('/create', async (req, res) => {
    const { name, description, imageUrl } = req.body
    
   await accessoryManager.create({ name, description, imageUrl })
    res.redirect('/')
})

module.exports = router 