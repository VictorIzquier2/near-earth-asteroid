'use strict'

const express = require('express');
const MethodsController = require('../controllers/methods');

const router = express.Router();

// Rutas
router.get('/findall', MethodsController.findAll);


module.exports = router;