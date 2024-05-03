const express = require('express');
const app = express();
const {Pool}  = require('pg');
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use(require('../routes/index'));


app.listen(1000);
console.log('Server on port 1000');

