const express = require('express');
const router = express.Router();

const Titulocontroller= require('../Controllers/TituloController');
router.get('/', Titulocontroller.list);
router.post('/', Titulocontroller.save);
router.delete('/:CI',Titulocontroller.delete);
router.get('/:CI', Titulocontroller.edit);
router.post('/:CI',Titulocontroller.update);

module.exports = router;
