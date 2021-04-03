'use strict'

const validator = require('validator');
const User = require('../models/user');

// Bcrypt para encriptar la contraseña
const bcrypt = require('bcrypt');
const bcryptSalt = 10;

// Passport
const passport = require('passport');

const controller = {
  
  signup: (req, res) => {
    
    // Recoger parámetros por post
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    
    // Validar datos(validator)
    try{
      const validate_username = !validator.isEmpty(username);
      const validate_email = !validator.isEmpty(email);
      const validate_password = !validator.isEmpty(password);
      
      if(!validate_username && !validate_password && !validate_email){
        return res
        .status(404)
        .send({
            status: 'error',
            message: 'Introduce un correo, usuario y contraseña'
          })

      }else if(password.length < 8){
        return res
        .status(404)
        .send({
          status: 'error',
          message: 'Por favor, asegúrate de que la contraseña tenga al menos 8 caracteres'
        })
      }
        
      User.findOne({'email': email}, (err, foundEmail) => {
        if(err){
          return res
          .status(500)
          .send({
            status: 'error',
            message: 'Error al tratar de acceder a la base de datos'
          })
        }else if(foundEmail){
          return res
          .status(404)
          .send({
            status: 'error',
            message: 'El email de usuario ya existe'
          })
        }

        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);

        const aNewUser = new User({
          username: username,
          email: email,
          password: hashPass
        });

        aNewUser.save((err) => {
          if(err){
            return res
              .status(400)
              .send({
                status: 'error',
                message: 'Algo fue mal al guardar el usuario. Inténtenlo de nuevo'
              })
          }            
            return res
              .status(200)
              .send({
                status: 'success',
                aNewUser
              })
        })
      })
    }catch(err){
      return res
        .status(500)
        .send({
          status: 'error',
          message: 'El usuario y contraseña son obligatorios', err
        })
    }

  },

  login: (req, res) => {
    
    // Recoger parámetros por post
    const email = req.body.email;
    const password = req.body.password;

    try{
      const validate_email = !validator.isEmpty(email);
      const validate_password = !validator.isEmpty(password);

      console.log(email, password)

      if(!validate_password && !validate_email){

        return res
          .status(404)
          .send({
            status: 'error',
            message: 'Introduce correo y contraseña'
          })
      }
        
      User.findOne({email: email})
        .then(results => {
          if(!results){
            return res
            .status(400)
            .send({
              status: 'error',
              message: 'El usuario no existe'
            })
          }else{
            bcrypt.compare(password, results.password)
              .then((resultFromBcrypt) => {
                if(resultFromBcrypt){
                  return res
                    .status(200)
                    .send({
                      status: 'success',
                      user: results
                    })        
                }else{
                  return res
                  .status(404)
                  .send({
                    status: 'error',
                    message: 'La contraseña es incorrecta'
                  })
                }
              })
          }
        })

    }catch(err){
      console.log(err);
    }
    
  },

  getAllUsers: (req, res) => {
    // Find 
    User.find({}).exec((err, users) => {

      if(err){
        return res
          .status(500)
          .send({
            status: 'error',
            message: 'Error al cargar los usuarios'
          })
      }else if(!users){
        return res
          .status(404)
          .send({
            status: 'error',
            message: 'No hay usuarios para mostrar'
          })
      }

      return res
        .status(200)
        .send({
          status: 'success',
          users: users
        })
        

    })
  },

  getUser: (req, res) => {
    // Recoger el id de la url
    const userId = req.params.id;

    // Comprobar que existe
    if(!userId || userId === null){
      return res.status(400).send({
        status: 'error',
        message: 'Se necesita introducir un identificador para buscar al usuario en la base de datos'
      })
    }
    // Buscar el usuario
    User.findById(userId, (err, user) => {
      if(err || !user){
        return res
          .status(500)
          .send({
            status: 'error',
            message: 'El usuario no existe o no se ha podido conectar con la base de datos'
          })
      }

      // Devolverlo en json
       return res
        .status(200)
        .send({
          status: 'success',
          user: user
        });
    })
  },

  update: (req, res) => {
    // Recoger el id del artículo por la URL
    const userId = req.params.id;
    console.log(userId);

    // Recoger los datos que llegan por PUT
    const params = req.body;

    // Validar los datos
    try{
      const validate_username = !validator.isEmpty(params.username);
      const validate_email = !validator.isEmpty(params.email);
      const validate_password = !validator.isEmpty(params.password);

      if(validate_username && validate_email && validate_password){
        // Find and update
        User.findOneAndUpdate({_id: userId}, params, {new: true}, (err, userUploaded) => {
          console.log(userUploaded)
          if(err){
            return res
              .status(500)
              .send({
                status: 'error',
                message: 'No se ha podido conectar con la base de datos'
              })
          }else if(!userUploaded){
            return res
              .status(404).send({
                status: 'error',
                message: 'No existe el usuario'
              })
          }
          // Find and Update
          return res.status(400).send({
            status: 'success',
            user: userUploaded
          })
        })
      }
    }catch{
      return res
        .status(404).send({
          status: 'error',
          message: 'No existe el usuario'
        })
    }
  },

  delete: (req, res) => {
     // Recoger el ID de la URL 
    const userId = req.params.id;

    // Find and Delete
    User.findOneAndDelete({_id: userId}, (err, userRemoved) => {
      if(err){
        return res
          .status(500)
          .send({
            status: 'error',
            message: 'Error en la petición'
          })
      }
      if(!userRemoved){
        return res
          .status(400)
          .send({
            status: 'error',
            message: 'El usuario no existe'
          });
      }
      return res
        .status(404).send({
          status: 'success',
          user: userRemoved
        })
    })
  },

  search: (req, res) => {
     // Sacar el string
    const searchString = req.params.search;

    // Find or
    User.find({ "$or": [
      {"username": {"$regex": searchString, "$options": "i"}},
      {"email": {"$regex": searchString, "$options": "i"}},
     ]})
    .exec((err, users) => {

      if(err || !users || users === null || users.length < 1){
         return res
          .status(404)
          .send({
            status: 'err', err,
            message: 'La petición no existe'
      })
      }

      return res
      .status(200)
      .send({
        status: 'success',
        users
      })
    })

  }


}

module.exports = controller;