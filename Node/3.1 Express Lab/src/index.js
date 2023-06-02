const express = require('express')
const app = express()

const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const dbConnect = require('./config/dbConfig')

const router = require('./routs')
const PORT = 5000

//async will connecting to DB till do the code below db
dbConnect()
.then(()=>console.log('DB connected successfully '))
.catch(err => console.log('DB Error: ', err))

  //express config
  expressConfig(app)

  //config handlebars
  handlebarsConfig(app)

  //Routes (Modular Routes)
  app.use(router)

  app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`) })