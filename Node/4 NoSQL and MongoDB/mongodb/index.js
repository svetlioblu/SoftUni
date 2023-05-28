const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const connectionStr = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(connectionStr);

async function connectDb() {
    await client.connect()
    const db = client.db('user-list')
    const users = db.collection('users')
    const result = await users.find().toArray()

    console.log(result)
}
connectDb()
