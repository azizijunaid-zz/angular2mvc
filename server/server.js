/* imports */
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
let todoModel = require('./Model/model');
const connection = mongoose.connect('mongodb://localhost:27017/tododb');
let todoRoutes = require('./Routes/index');
var cors = require('cors');

/* body-parser for form data*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

/* routes */
app.use('/', todoRoutes);

/* server listening */
app.listen(3000, () => console.log('Example app listening on port 3000!'))