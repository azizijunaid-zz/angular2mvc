let todoModel = require('../Model/model');


exports.getAll = (req, res) => {
    todoModel.find({}).then((data, error) => {
        error ? res.json(error.message) : res.json(data);
    })
}

exports.createTodo = (req, res) => {
    req.body['createdAt'] = Date.now();
    let todo = new todoModel(req.body);
    todo.save((error, result) => {
        console.log('result', result)
        error ? res.json(error.message) : res.json(result);
    });
}

exports.updateTodo = (req, res) => {
    todoModel.findByIdAndUpdate({'_id': req.params.id}, {$set: req.body} , {}, (err, result)=>{
        res.json("record updated successfully!");
    });
}

exports.toggleCompleted = (req, res) => {
    todoModel.findByIdAndUpdate({_id: req.params.id}, {$set: req.body} , {}, (err, result)=>{
        res.json("record updated successfully!");
    });
}

exports.removeTodoById = (req, res) => {
    todoModel.findByIdAndRemove({_id: req.params.id}, (err, result)=>{
        err ? res.json(err.message) : res.json(result);
    });
}


exports.removeAll = (req, res) => {
    todoModel.remove((err, result)=>{
       return err ? res.json(err.message = 'error while removing') : res.json('successfully removed');
    });
}

exports.clearCompletedTodos = (req, res) => {
    console.log('chala...')
    console.log('req params', req.body)
    todoModel.deleteMany({_id: { $in: req.body}}, (err) => {
       return err ? res.json(err.message) : res.json('successfully removed')
    })
}