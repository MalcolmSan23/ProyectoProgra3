const express = require('express');
const router = express.Router();

const CaparecibidaController = require('../Controllers/CaparecibidaController');
router.get('/', CaparecibidaController.list);
router.post('/', CaparecibidaController.save);
router.delete('/:idcapa', CaparecibidaController.delete);
router.get('/:idcapa', CaparecibidaController.edit);
router.post('/:idcapa', CaparecibidaController.update);

module.exports = router;