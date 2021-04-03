'use strict'

const validator = require('validator');
const User = require('../models/user');
const Asteroid = require('../models/asteroid');

// Bcrypt para encriptar la contraseña
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

// Passport
const passport = require('passport');

const controller = {
  
  findAll: (req, res) => {

    const findAsteroids = () => Asteroid.find({});
    const findUsers = () => User.find({});
    Promise.all([findAsteroids(), findUsers()])
      .then(results => {
        return res
        .status(200)
        .send({
          status: 'success',
          results: results
        })
      })
    

  }

}

module.exports = controller;