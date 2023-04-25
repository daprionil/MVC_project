const express = require('express');
const { getPageOpinions } = require('../controllers/opinionsController.js');

const routerOpinions = express.Router();


routerOpinions.get('/', getPageOpinions);

module.exports = routerOpinions;