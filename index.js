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

fs.readFile('db.json', (err, data) => {
    if(err) throw err;
    const { characters } = JSON.parse(data);
    const nR = Math.floor(Math.random() * characters.length);
    
    //? Create pages
    const nPerPage = process.env.NUMBER_PAGES_PER_PAGE;
    const nPages = Math.ceil(characters.length / nPerPage);
    const pages = new Array(nPages).fill(0).map((val, i) => {
        const startSliced = nPerPage * i;
        return characters.slice(startSliced, startSliced + nPerPage);
    });

    pagesCharacters = pages;
    charactersList = characters;
    firstElements = characters.slice(nR, nR + 3);
});

app.use((req,res,next) => {

    res.locals.pageName = 'Lista de Campeones';
    res.locals.localYear = new Date().getFullYear();
    res.locals.listRandomCharacters = firstElements;
    res.locals.charactersList = charactersList;
    res.locals.pagesCharacters = pagesCharacters;

    next();
});

app.use('/', router);

app.use(express.static("public"));
app.set("view engine", "pug");

app.listen(port, 'localhost', () => {
    console.log('servidor Corriendo en el puerto: ' + port);
});