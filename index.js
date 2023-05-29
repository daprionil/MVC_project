const fs = require('fs');

const express = require('express');
const dotenv = require('dotenv/config');
const router = require('./routes/router');

const app = express();
const port = process.env.PORT || 3001;

//Adecuations Level 1
let charactersList = []
let firstElements = [];
let pagesCharacters = [];
let numberPages = 0;

fs.readFile('db.json', (err, data) => {
    if(err) throw err;
    const { characters } = JSON.parse(data);
    
    //? Create pages
    const nPerPage = process.env.NUMBER_PAGES_PER_PAGE;
    const nPages = Math.ceil(characters.length / nPerPage);

    const pages = new Array(nPages).fill(0).map((val, i) => {
        const startSliced = nPerPage * i;
        return characters.slice(startSliced, startSliced + nPerPage);
    });

    pagesCharacters = pages;
    numberPages = nPages;
    charactersList = new Map(characters.map(ch => {
        return [ch.id, ch]
    }));

    firstElements = characters.slice(0, 3);
});

//Middleware
app.use(async (req,res,next) => {

    res.locals.listPageCharacters = {
        listRandomCharacters: firstElements,
        charactersList,
        pagesCharacters,
        numberPages,
    };

    res.locals.pageName = 'Lista de Campeones';
    res.locals.localYear = new Date().getFullYear();

    next();
});

//Router Init
app.use('/', router);

//Add Directory to root directory
app.use(express.static("public"));

//Set Template Engine
app.set("view engine", "pug");

//Configuration server express
app.listen(port, 'localhost', () => {
    console.log('servidor Corriendo en el puerto: ' + port);
});