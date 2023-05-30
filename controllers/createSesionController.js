const createSesionController = async (req, res) => {
    try{
        const {body,method} = req;
        if(method === 'POST'){
            const {email,password, password2} = body;
            console.log({email,password, password2});
        };

        res.render('crearSesion',{sesion:true, errors});
    }catch({message}){
        res.render('404NotFound',{message});
    };
};

module.exports = createSesionController;