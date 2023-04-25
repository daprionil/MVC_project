const express = require('express');

const { getPageInicio } = require('../controllers/inicioController.js');

const routerList = require('./routerList.js');
const routerOpinions = require('./routerOpinions.js');

require('dotenv').config();

const router = express.Router();

router.get("/", getPageInicio);

router.use("/list", routerList);

router.use('/opinions', routerOpinions);

module.exports = router;