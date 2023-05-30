const mongoose = require('mongoose')

const User = require('./models/USER')

async function connnectDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/user-list')
    console.log('DB connected successfuly !')

    //Read
    const allUsers = await User.find()
    const aFirstUser = await User.findOne()
    const userById = await User.findById('640f3c9d8ede2e2d040c8a08')
    const filteredUsers = await User.find({ firstName: 'Predator' })
    const filteredAUser = await User.findOne({ firstName: 'Predator' })

    //Create (two ways)

    // const newUser = new User({ 
    //     isDeleted: false,
    //     firstName: 'Ivaylo',
    //     lastName: 'Papazov',
    //     email: 'ivko@abv.bg',
    //     imageUrl: 'noImg',
    //     phoneNumber: '089 98273654',
    //     address: 'Moderno Predgradie 13'
    // })
    // await newUser.save()
//================================================
    // const newUser = await User.create({
    //     isDeleted: false,
    //     firstName: 'Tanka',
    //     lastName: 'Ivanova',
    //     email: 'ivko@abv.bg',
    //     imageUrl: 'noImg',
    //     phoneNumber: '089 98273654',
    //     address: 'Moderno Predgradie 100'
    // })




    // can log users or to call method defined into a model
    //=> users.forEach(user => user.greet())
    //virtual property defind into the model
    //=> users.forEach(user => console.log(user.info))


    console.log()

}

connnectDb()