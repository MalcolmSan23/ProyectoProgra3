const express = require('express');
const router = express.Router();

const TipocapacitacionController= require('../Controllers/tipocapacitacionController');
router.get('/', TipocapacitacionController.list);
router.post('/', TipocapacitacionController.save);
router.delete('/:CI', TipocapacitacionController.delete);
router.get('/:CI', TipocapacitacionController.edit);
router.post('/:CI', TipocapacitacionController.update);

module.exports = router;
