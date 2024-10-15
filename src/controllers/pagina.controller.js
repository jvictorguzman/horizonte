
export const inicio = function(req,res){
    //res.send("Saludos Humanos")
    res.render("index", {layout: 'layout-pagina'})
}

export const nosotros= function (req,res){
    //res.send('Acerca de Nosotros')
    res.render("nosotros", {layout: 'layout-pagina'})
}

export const ingresar = function(req,res){
    //res.send('Inicio de Sesion')
    res.render("Login", {layout: 'layout-pagina', mensaje : req.flash('mensaje')})
}


class PaginaController{

}