const express = require('express')
const app = express()

const { v4: uuid } = require('uuid')
const cookieParser = require('cookie-parser')

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//use middleware
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

const users = {}

app.get('/', (req, res) => {
    console.log(users)
    // jwt consists of 3 parts
    const payload = { id: uuid(), username: 'Pesho' }
    const options = { expiresIn: '2d' }
    const secret = 'mySuperPrivateSecret'

    const token = jwt.sign(payload, secret, options)

    res.send(token)
})

app.get('/register', (req, res) => {
    res.send(`
<form method="POST">
    <label for="username">Username:</label>
    <input type="text" id="userName" name="userName">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
<input type="submit" value="Register">
</form>
`)
})
app.post('/register', async (req, res) => {
    const { userName, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    users[userName] = {
        password: hash
    }
    res.redirect('/login')

})

///////////////////
app.get('/login', (req, res) => {
    res.send(`
<form method="POST">
    <label for="username">Username:</label>
    <input type="text" id="userName" name="userName">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
<input type="submit" value="Login">
</form>
`)
})
app.post('/login', async (req, res) => {
    const { userName, password } = req.body

    const hash = users[userName]?.password
    const isValid = await bcrypt.compare(password, hash)

    if (isValid) {
        res.send('Succsess Log in!')
    } else {
        res.send('the password is not correct Unauthorized ')
    }
    console.log(userName, password)
})

app.listen(5000, () => { console.log('Server listening on Port 5000...') })