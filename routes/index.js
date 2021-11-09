const express = require('express');
const router = express.Router();
const pacController = require("../controllers/pacController");


/* GET home page. */
router.get('/', pacController.index);

router.get('/rPaciente', pacController.rPaciente);

router.get('/isPaciente', pacController.isPaciente);

router.post('/registrarPac', pacController.registrarPac);

module.exports = router;
