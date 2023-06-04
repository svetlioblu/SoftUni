const router = require('express').Router()

const cubeManager = require('../managers/cubeManager')
const accessoryManager = require('../managers/accessoryManager')


// !the controller in index.js is set to /cubes/create. Main layout a href = /cubes/create
//render the form create page
router.get('/create', (req, res) => {
    res.render('create')
})

//Send the data when the form is submited. The form has action /cubes/create and meth=POST
router.post('/create', async (req, res) => {

    // req.body have the parced data to object due to the express middleware bodyparser config
    const { name, description, imageUrl, difficultyLevel } = req.body
    //The idea of destructoring is to have validation ...
    await cubeManager.create({ name, description, imageUrl, difficultyLevel: Number(difficultyLevel) })

    res.redirect('/')
})

router.get('/:cubeId/details', async (req, res) => {

    const cube = await cubeManager.getOne(req.params.cubeId).lean()


    if (!cube) {
        return res.redirect('/404')
    }
    res.render('details', { cube })
})

// cubeAttachController details page
router.get('/:cubeId/attach-accessory', async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean()
 
    const accessories = await accessoryManager.getAvailable(cube.accessories).lean()

    const hasAccsseories = accessories.length > 0

    res.render('accessory/attach', { cube, accessories, hasAccsseories })
})

router.post('/:cubeId/attach-accessory', async (req, res) => {
    //taking the name attribute comming from the select in attach.hbs
    //that wy will retutn the accessory comming fro mthe form
    const { accessory } = req.body
    const cubeId = req.params.cubeId

    await cubeManager.attachAccessory(cubeId, accessory)

    res.redirect(`/cubes/${cubeId}/details`)
})

module.exports = router