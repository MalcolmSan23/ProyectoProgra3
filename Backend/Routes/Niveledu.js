const express = require('express');
const router = express.Router();

const NiveleduController = require('../Controllers/NiveleduController');
router.get('/', NiveleduController.list);
router.post('/', NiveleduController.save);
router.delete('/:idniveledu', NiveleduController.delete);
router.get('/:idniveledu', NiveleduController.edit);
router.post('/:idniveledu', NiveleduController.update);

module.exports = router;