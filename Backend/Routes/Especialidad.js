const express = require('express');
const router = express.Router();

const EspecialidadController = require('../Controllers/EspecialidadController');
router.get('/', EspecialidadController.list);
router.post('/', EspecialidadController.save);
router.delete('/:idespecialidad', EspecialidadController.delete);
router.get('/:idespecialidad', EspecialidadController.edit);
router.post('/:idespecialidad', EspecialidadController.update);

module.exports = router;