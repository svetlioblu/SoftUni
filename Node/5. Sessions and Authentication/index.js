const express = require('express')
const app = express()
const { v4: uuid } = require('uuid')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt')

//use middleware
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

const users = {}

app.get('/', (req, res) => {
    console.log(users)
    res.send('ok')
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