export const estaLogueado = function(req, res, next){
    console.log("sesiones", req.session);
    if(req.session && req.session.user && req.session.admin){
        return next()
    }else{
        res.redirect('/login')
    }

}