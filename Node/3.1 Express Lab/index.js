const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello express</h1>')

})

app.listen(5000, ()=>{console.log('Server listening on port 5000...')})