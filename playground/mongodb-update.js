// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')

//    db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5c156c224908957b86c96911')
//    }, {
//     $set: {
//         completed: true
//     }, 
//    }, {
//        returnOriginal: false
//    }).then((result) => {
//        console.log(result);
//    })
    
    // db.collection('Users').findOneAndUpdate({
    //     name: 'Harry'
    // }, {
    //     $set: {
    //         name: 'Edward'
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').findOneAndUpdate({
        name: 'Edward'
    }, {
        $inc: {
            age: +1
        }
    }).then((result) => {
        console.log(result);
    })


    // client.close();
});