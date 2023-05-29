const express = require('express');
const { getPageList, getPageOnlyCharacter } = require('../controllers/listController');

const routerList = express.Router();

routerList.get("/", getPageList);

routerList.use(express.static('public'));
routerList.get('/:character_id', getPageOnlyCharacter)

module.exports = routerList;