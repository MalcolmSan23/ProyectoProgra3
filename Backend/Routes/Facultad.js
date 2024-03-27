const express = require('express');
const router = express.Router();

const FacultadController = require('../Controllers/FacultadController');
router.get('/', FacultadController.list);
router.post('/', FacultadController.save);
router.delete('/:CI', FacultadController.delete);
router.get('/:CI', FacultadController.edit);
router.post('/:CI', FacultadController.update);

module.exports = router;
