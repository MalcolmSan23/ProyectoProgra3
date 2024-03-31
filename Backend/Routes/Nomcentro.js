const express = require('express');
const router = express.Router();

const NomcentroController = require('../Controllers/NomcentroController');
router.get('/', NomcentroController.list);
router.post('/', NomcentroController.save);
router.delete('/:idnomcentro', NomcentroController.delete);
router.get('/:idnomcentro', NomcentroController.edit);
router.post('/:idnomcentro', NomcentroController.update);

module.exports = router;