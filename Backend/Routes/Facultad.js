const express = require('express');
const router = express.Router();

const FacultadController = require('../Controllers/facultadController');
router.get('/', FacultadController.list);
router.post('/', FacultadController.save);
router.delete('/:idfacultad', FacultadController.delete);
router.get('/:idfacultad', FacultadController.edit);
router.post('/:idfacultad', FacultadController.update);

module.exports = router;