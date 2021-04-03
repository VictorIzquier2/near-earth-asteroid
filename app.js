'use strict'

// Cargar los módulos de node para crear el servidor
const express = require('express');
const bodyParser = require('body-parser');


// Ejecutar express (http)
const app = express();

// Cargar ficheros rutas
const asteroidRoutes = require('./routes/asteroid');
const authRoutes = require('./routes/auth');
const methods = require('./methods/methods');


// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Cargar rutas
app.use('/api', asteroidRoutes);
app.use('/methods', methods);
app.use('/', authRoutes);

// Exportar el módulo (fichero actual)
module.exports = app;