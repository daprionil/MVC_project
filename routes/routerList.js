const express = require('express');
const { getPageList } = require('../controllers/listController');

const routerList = express.Router();

routerList.get("/:id", getPageList);
routerList.use(express.static("public"));

module.exports = routerList;