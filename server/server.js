const express = require('express')
const app = express();
const mongoose = require('mongoose');
const connectiond = mongoose.connect('mongodb://localhost:27017/tododb');
const db = mongoose.connection;
const MongoClient = require('mongodb').MongoClient;
var database = null;

MongoClient.connect('mongodb://localhost:27017/tododb', function(err, res){
    if(err){
        console.log('res', err);
    }
    database = res;
    console.log('data', res);
})

//use tododb;
//db.todo.find({});

// //console.log('db' ,db)
// app.get('/', (req, res) => {
//     //res.send('Hellow World!!!'));
//     //console.log(db.todo.find({}));
//    // db.todo.find({});
// })


app.listen(3000, () => console.log('Example app listening on port 3000!'))