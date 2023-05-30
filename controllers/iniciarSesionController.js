const iniciarSesionController = (req, res) => {
    try{
        res.render('iniciarSesion',{sesion:true});
    }catch({message}){
        res.render('404NotFound',{message});
    };
};

module.exports = iniciarSesionController;