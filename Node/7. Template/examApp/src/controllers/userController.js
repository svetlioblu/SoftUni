const router = require('express').Router()

const userService = require('../services/userService')
const { getErrorMessage } = require('../utils/errorHelpers')

router.get('/login', (req, res) => {
    res.render('users/login')
})
router.post('/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const token = await userService.login(username, password)
        res.cookie('auth', token, { httpOnly: true })

        res.redirect('/')
    } catch (err) {

        res.render('users/login', { error: getErrorMessage(err), username, password })
    }
})


// Register
router.get('/register', (req, res) => {
    res.render('users/register')
})
router.post('/register', async (req, res) => {
    const { username, email, password, repeatPassword } = req.body
    try {
        const token = await userService.register({ username, email, password, repeatPassword })
        //automatic login on register
        res.cookie('auth', token, { httpOnly: true })
        res.redirect('/')

    } catch (err) {

        res.render('users/register', { error: getErrorMessage(err) })
    }

})

router.get('/logout', (req, res) => {
    res.clearCookie('auth')
    res.redirect('/')
})


module.exports = router