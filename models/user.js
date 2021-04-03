'use strict'

// Modulo
const mongoose = require('mongoose');

// Variable
const Schema = mongoose.Schema;

// Estructura del modelo
const userSchema = Schema({
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true, minlength: 8}
});

const User = mongoose.model('User', userSchema);
module.exports= User;