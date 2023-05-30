const express = require('express');

const { getPageInicio } = require('../controllers/inicioController.js');

const iniciarSesionController = require('../controllers/iniciarSesionController.js');
const createSesionController = require('../controllers/createSesionController.js');

const routerList = require('./routerList.js');
const routerOpinions = require('./routerOpinions.js');

require('dotenv').config();

const router = express.Router();

router.get("/", getPageInicio);

router.use("/list", routerList);

router.use('/opinions', routerOpinions);

router.get('/iniciar-sesion', iniciarSesionController);
router.post('/iniciar-sesion', iniciarSesionController);

router.get('/crear-sesion', createSesionController);
router.post('/crear-sesion', createSesionController);

module.exports = router;