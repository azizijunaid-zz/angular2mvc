const express = require('express')
const app = express();
const routes = require('express').Router();
let todoModel = require('../Model/model');


routes.get('/', (req, res) => {
    todoModel.find({}).then((data, error) => {
        error ? res.json(error.message) : res.json(data);
    })
});

/* create todo */
routes.post('/createtodo', (req, res) => { 
    req.body['createdAt'] = Date.now();
    let todo = new todoModel(req.body);
    todo.save((error, result) => {
        error ? res.json(error.message) : res.json(result);
    });
})

/* gettodobyId get the specific todo by id */
routes.get('/gettodobyId/:id', (req, res) => {
    todoModel.findById({'_id': req.params.id}, (err, doc) => {
        err ? res.json(err.message = 'id not found') : res.json(doc);
    });
})


/* toggle completed*/
routes.put('/toggleCompleted/:id', (req, res) => {
    todoModel.findByIdAndUpdate({_id: req.params.id}, {$set: req.body} , {}, (err, result)=>{
        res.json("record updated successfully!");
    });
})

/* delete the specific record by id*/
routes.delete('/removetodobyId/:id', (req, res) => {
    todoModel.findByIdAndRemove({_id: req.params.id}, (err, result)=>{
        err ? res.json(err.message) : res.json(result);
    });
})

/* delete all the records*/
routes.delete('/removeAll', (req, res) => {
    todoModel.remove((err, result)=>{
        err ? res.json(err.message = 'error while removing') : res.json('successfully removed');
    });
})
  
module.exports = routes;