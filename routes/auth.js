'use strict'

const express = require('express');
const AuthController = require('../controllers/auth');

const router = express.Router();

// Rutas
router.post('/signup', AuthController.signup );
router.post('/login', AuthController.login);
router.get('/users', AuthController.getAllUsers);
router.get('/users/:id', AuthController.getUser);
router.put('/users/:id', AuthController.update);
router.delete('/users/:id', AuthController.delete);
router.get('/users/search/:search', AuthController.search)

module.exports = router;