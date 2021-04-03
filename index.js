'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3900;

// Configuración de Mongoose 
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_rest_asteroids', {
  useNewUrlParser: true,
  useUnifiedTopology: true
  })
  .then(() => {
    console.log('Conexión a la base de datos correcta');

    // Crear el servidor y escuchar las peticiones http
    app.listen(port, () => {
      console.log('Servidor corriendo en http://localhost:'+port)
    });
});