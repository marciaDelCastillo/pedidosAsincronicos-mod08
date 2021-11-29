const express = require("express");
const app = express();
const fetch = require("node-fetch");

var path = require('path');
//Requiriendo rutas
var indexRouter = require('./routes/index');
//Aquí estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//designo la carpeta public
app.use(express.static("public"));
//Rutas
app.use('/', indexRouter);

app.listen(3000,()=>console.log("Servidor corriendo en puerto 3000"));