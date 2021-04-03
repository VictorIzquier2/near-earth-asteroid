'use strict'

const express = require('express');
const AsteroidController = require('../controllers/asteroid');

const router = express.Router();

// Rutas de prueba
router.post('/prueba', AsteroidController.prueba);
router.get('/test', AsteroidController.test );

// Rutas
router.get('/asteroids/save-asteroids-from-csv', AsteroidController.saveAsteroidsFromCSV);
router.post('/asteroids/save', AsteroidController.save);
router.get('/asteroids', AsteroidController.getAsteroids);
router.get('/asteroids/:id', AsteroidController.getAsteroid);
router.put('/asteroids/:id', AsteroidController.update);
router.delete('/asteroids/:id', AsteroidController.delete);
router.get('/asteroids/search/:search', AsteroidController.search);

module.exports = router;