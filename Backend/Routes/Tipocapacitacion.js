const express = require('express');
const router = express.Router();

const TipocapacitacionController = require('../Controllers/TipocapacitacionController');
router.get('/', TipocapacitacionController.list);
router.post('/', TipocapacitacionController.save);
router.delete('/:idtipocapa', TipocapacitacionController.delete);
router.get('/:idtipocapa', TipocapacitacionController.edit);
router.post('/:idtipocapa', TipocapacitacionController.update);

module.exports = router;