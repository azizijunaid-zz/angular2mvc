const express = require('express')
const app = express();
const routes = require('express').Router();
let todoModel = require('../Model/model');
let controller = require('../controller/controller');

/* get all todos */
routes.get('/', controller.getAll);

/* create todo */
routes.post('/createtodo', controller.createTodo);


/* gettodobyId get the specific todo by id */
routes.get('/gettodobyId/:id', controller.getTodoById);


/* toggle completed*/
routes.put('/toggleCompleted/:id', controller.toggleCompleted);

/* delete the specific record by id*/
routes.delete('/removetodobyId/:id', controller.removeTodoById);

/* delete all the records*/
routes.delete('/removeAll', controller.removeAll);
  
module.exports = routes;