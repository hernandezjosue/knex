const express = require('express');
const router = express.Router();
const {animalController} = require('../controllers')
// Create
router.post('/animals',animalController.create)
//obteniendo todos los animales
router.get('/animals',animalController.getAllAnimals)
//obteniendo todos los animal por id
router.get('/animals/:idAnimal',animalController.getAnimalById)


module.exports = router;