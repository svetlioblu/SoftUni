const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))

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

})


app.listen(5000, () => { console.log('app listen on port 5000...') })