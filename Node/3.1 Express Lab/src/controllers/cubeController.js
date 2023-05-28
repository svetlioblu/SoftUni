const router = require('express').Router()

const cubeManager = require('../managers/cubeManager')


// !the controller in index.js is set to /cubes/create. Main layout a href = /cubes/create
//render the form create page
router.get('/create', (req, res) => {
    res.render('create')
})


//Send the data when the form is submited. The form has action /cubes/create and meth=POST
router.post('/create', (req, res) => {

    // req.body have the parced data to object due to the express middleware bodyparser config
    const { name, description, imageUrl, difficultyLevel } = req.body
    //The idea of destructoring is to have validation ...
    cubeManager.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) })

    res.redirect('/')
})

router.get('/:cubeId/details', (req, res) => {
    const cubeId = req.params.cubeId
    const cube = cubeManager.getOne(cubeId)

    res.render('details', { cube })
})

module.exports = router