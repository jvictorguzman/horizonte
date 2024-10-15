
import models from './../models'
import bcrypt from 'bcrypt'

export const listar = async (req, res) => {
    // select * from usuarios, realizar con sequelize
    let usuarios = await models.Usuario.findAll()
    res.render('admin/usuario/listar', {datos: usuarios, mensaje: req.flash('mensaje')})
}
export const nuevo = async (req, res) => {

    res.render('admin/usuario/nuevo.ejs', {mensaje: req.flash('mensaje')})
}

export const guardar = async (req, res) => {
    
    let BCRYPT_SALT_ROUND = 12
    const hashedPassword = await bcrypt.hash(req.body.clave, BCRYPT_SALT_ROUND)
    
    let usuario = {
        username: req.body.username,
        email: req.body.correo,
        password: hashedPassword
    }

    try{
        //verificar si el correo ya existe en la base de datos
        let u = await models.Usuario.findOne({where: {email: req.body.correo}})
        if(u !== null){
            console.log("El correo ya existe")
            req.flash('mensaje', 'El correo ya existe')
            return res.redirect('/admin/usuario/nuevo')
        }else{
            await models.Usuario.create(usuario)
            req.flash('mensaje', 'Usuario registrado')
            return res.redirect('/admin/usuario')
        }      
    }catch(error){
        console.log(error);
    }

    return res.status(500).send('Error al guardar el usuario')
}

export const editar = async (req, res) => {
let id = req.params.id
let usuario = await models.Usuario.findByPk(id)
res.render('admin/usuario/editar', {usuario: usuario, mensaje: req.flash('mensaje')})
}

export const modificar = async (req, res) => {
    let id = req.params.id
      
    let BCRYPT_SALT_ROUND = 12
    let hashedPassword = await bcrypt.hash(req.body.clave, BCRYPT_SALT_ROUND)
    
    let usuario = {
        username: req.body.username,
        email: req.body.correo,
        password: hashedPassword
    }

    try{
        //verificar si el correo ya existe en la base de datos
        await models.Usuario.update(usuario, {where: {id}})
        
            req.flash('mensaje', 'Usuario Actualizado')
            return res.redirect('/admin/usuario')
      
    }catch(error){
        console.log(error);
    }
}

export const eliminar = async function(req,res){

    let id = req.params.id;

    await models.Usuario.destroy({
        where: {
            id:id
        }
    })
    req.flash('mensaje', 'Usuario Eliminado')
    return res.redirect('/admin/usuario')
}