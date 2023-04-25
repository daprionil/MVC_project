const getPageList = async (req,res) => {
    try {
        const { id } = req.params;

        if(id >= res.locals.pagesCharacters.length) throw new Error('Esta página no fue encontrada');

        //! Obtener el listado desde JSON server
        const values = {
            listRandomCharacters: res.locals.listRandomCharacters,
            pagesCharacters: res.locals.pagesCharacters,
            pageNumber: id
        }

        console.log(res.locals.listRandomCharacters[0]);

        res.status(200).render('listaCaracteres', values);
    } catch ({message}) {
        res.status(400).render('404NotFound', {
            message
        });
    };
};

module.exports = {
    getPageList
}