const router = require('express').Router()

const homeController = require('./controllers/homeController')
const userController = require('./controllers/userController')



router.use(homeController)
router.use('/users', userController)

// Use if need any non existing url path to lead 404
// router.get('*', (req, res) => {
//     res.redirect('/404')
// })

module.exports = router