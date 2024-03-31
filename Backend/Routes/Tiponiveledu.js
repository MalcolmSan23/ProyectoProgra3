const express = require('express');
const router = express.Router();

const TiponiveleduController = require('../Controllers/TiponiveleduController');
router.get('/', TiponiveleduController.list);
router.post('/', TiponiveleduController.save);
router.delete('/:idtiponiveledu', TiponiveleduController.delete);
router.get('/:idtiponiveledu', TiponiveleduController.edit);
router.post('/:idtiponiveledu', TiponiveleduController.update);

module.exports = router;