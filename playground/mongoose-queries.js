const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5c18271a01b4496944179b02';

if(!ObjectID.isValid(id)) {
    console.log('ID not valid');
}


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log(todo);
// })

User.findById('5c16200ddb9fa85554ba65f6').then((user) => {
    if(!user) {
        return console.log('User not found');
    }
    console.log(user);
}).catch((e) => console.log(e));