const express = require('express');
const router = express.Router();
const pacController = require("../controllers/pacController");
const usuController = require("../controllers/usuController");
const medController = require("../controllers/medController");

/* GET home page. */
router.get('/', pacController.index);

router.get('/rPaciente', pacController.rPaciente);

router.get('/isPaciente', pacController.isPaciente);

router.post('/registrarPac', pacController.registrarPac);

router.get('/avisoDePrivacidad', pacController.avisoDePrivacidad);

router.get('/terminosCondicionesUso', pacController.terminosCondicionesUso);

router.post('/validarUsu', usuController.validarUsu);

router.get('/pantallaInicial', pacController.pantallaInicial);

router.get('/cerrarSesion', usuController.cerrarSesion);

router.post('/actualizarUsu', usuController.actualizarUsu);

router.get('/registrarCitaV', pacController.registrarCitaV);

router.post('/buscarMedico', medController.buscarMedico);

router.get('/seleccionarMedico', pacController.seleccionarMedico);

router.get('/cancelarCit', pacController.cancelarCit);

router.post('/guardarCita', pacController.guardarCita);

router.post('/cancelarCita', pacController.cancelarCita);

module.exports = router;
