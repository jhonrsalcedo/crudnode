/*jshint esversion: 6 */

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares podemos ejecutar funciones antes de que llegen - los middlwares son funciones
// registrar las peticiones que llegan
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'crudnode'
}, 'single'));


//routes

app.listen(3000, () =>{
    console.log('Server on port 3000');
});

