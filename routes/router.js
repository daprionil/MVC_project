const express = require('express');

require('dotenv').config();

const router = express.Router();

router.get("/", (req,res) => {
    res.render('inicio');
});

router.get("/list",async (req,res) => {
    try {
        //! Obtener el listado desde JSON server
        res.status(200).render('listaCharacters');
    } catch ({message, cause:{code}}) {
        res.status(400).render('404NotFound', {
            message,
            code
        });
    };
});

module.exports = router;