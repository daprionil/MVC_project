const getPageList = async (req,res) => {
    try {
        const { page_number = '1' } = req.query;
        
        const { pagesCharacters, numberPages, listRandomCharacters } = res.locals.listPageCharacters;

        if(page_number > pagesCharacters.length) throw new Error('Esta página no fue encontrada');

        //! Obtener el listado desde JSON server
        const values = {
            listRandomCharacters,
            charactersPage: pagesCharacters[page_number - 1],
            pageNumber: page_number,
            paginator: new Array(numberPages).fill(0).map((v,i) => i + 1)
        }

        res.status(200).render('listaCaracteres', values);
    } catch ({message}) {
        res.status(400).render('404NotFound', {
            message
        });
    };
};

const getPageOnlyCharacter = (req, res) => {
    try {
        const { character_id } = req.params;
        const { charactersList } = res.locals.listPageCharacters;
        
        const character = charactersList.get(Number(character_id));

        if(!character) throw new Error('El caracter que intentas Obtener no existe');
        
        console.log(character);
        
        res.status(200).render('pageOnlyCharacter', character)
    } catch ({message}) {
        res.status(400).render('404NotFound',{message});
    };
};

module.exports = {
    getPageList,
    getPageOnlyCharacter
}