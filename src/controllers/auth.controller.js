
import models from './../models'
import bcrypt from 'bcrypt'

export const login = async (req,res) => {
    //console.log(req.body);
    let correo = req.body.correo
    let clave = req.body.clave
    //let { correo, clave} = req.boby
    // primero validar
    // consultar si el correo existe en la bdd
    let usuario = await models.Usuario.findOne({where: {email: correo}})
        
        if(usuario === null){            
            req.flash('mensaje', 'El usuario no existe en la BD')
            res.redirect("/login")            
        }else{
            //comparar si el hash es igual a la clave del 
            let result = await bcrypt.compare(clave, usuario.password)
           
            if(result){
                // crear session
                req.session.user = correo;
                req.session.admin = true;

                res.redirect("/admin/categoria")
            }else{
                req.flash('mensaje', 'Contrasena incorrecta')
                res.redirect("/login")  
            }
        }

    // si existe el correo , verificar la contrasena


   
      
}
 // si no existe - enviar una respuesta (las credenciales son incorrectas)
export const registro = async (req,res) => {
    req.body.username = "prueba"
    req.body.email = req.body.correo
    await models.Usuario.create(req.body)
    console.log('Usuario Registrado');
} 
