const express = require('express');
const router = express.Router();

const TituloController = require('../Controllers/TituloController');
router.get('/', TituloController.list);
router.post('/', TituloController.save);
router.delete('/:idtitulo', TituloController.delete);
router.get('/:idtitulo', TituloController.edit);
router.post('/:idtitulo', TituloController.update);

module.exports = router;