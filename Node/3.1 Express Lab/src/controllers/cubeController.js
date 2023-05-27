const router = require('express').Router()

// !the controller in index.js is set to /cubes/create. Main layout a href = /cubes/create
//render the form create page
router.get('/create', (req, res) => {
    res.render('create')
})
//send the data when the form is submited. The form has action /cubes/create and meth=POST
router.post('/create', (req, res) => {
    // req.body have the parced data to object due to the express middleware bodyparser config


    res.redirect('/')
})

module.exports = router