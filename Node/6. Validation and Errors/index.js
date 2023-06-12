const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))

const { isAgeValid, isNameValid } = require('./utils/commonValidations')

app.get('/', (req, res) => {

    res.send(`<form method="POST">
    <label for="name">Name</label>
    <input type="text" id="name" name="name">

    <label for="age">Age</label>
    <input type="number" name="age" id="age">

    <input type="submit" value="submit">

</form>`)
})
app.post('/', (req, res) => {
    const { name, age } = req.body
    //sample validation in the endpoint
    isNameValid(res,name)
    isAgeValid(res,age)

    console.log(name, age)
    res.send('Succsseeded')
})


app.listen(5000, () => { console.log('app listen on port 5000...') })