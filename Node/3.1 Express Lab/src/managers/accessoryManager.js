const Accessory = require('../models/Accessory')

exports.create = (accessoryData) => Accessory.create(accessoryData)

exports.getAll = () => Accessory.find()

exports.getAvailable = (accessories) => Accessory.find({ _id: { $nin: accessories} })


