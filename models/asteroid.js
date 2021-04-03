'use strict'

// Modulo
const mongoose = require('mongoose');

// Variable
const Schema = mongoose.Schema;

// Estructura del modelo
const AsteroidSchema = Schema({
  full_name: {type: String, required: true},
  a: {type: Number, required: true},
  e: {type: Number, required: true},
  i: {type: Number, required: true},
  om: {type: Number, required: true},
  w: {type: Number, required: true},
  ma: {type: Number, required: true}
});

const Asteroid = mongoose.model('Asteroid', AsteroidSchema);
module.exports= Asteroid;