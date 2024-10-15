import { QueryError } from "sequelize";
import models from "./../models/index"

export const listar = async (req,res) => {   

    try{
        let datos = await models.Producto.findAll()
        console.log(datos);
        // select * from productos
        res.render("admin/producto/lista", {datos: datos})
    }catch(error){
        console.log(error);
    } 

}

export const mostrar = (req,res) => {
    //res.send("Mostrar Categoria")
    let id = req.params.id
    models.Producto.findOne({
        where: {id:id}
    }).then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
    res.render("admin/producto/mostrar")
}

export const guardar = async (req,res) => {
    try{
        let datos = req.body
        await models.Producto.create(datos)
        res.redirect('/admin/producto')
    }catch(error){
        console.log(error);
    }    
}

export const editar = async (req, res) => {
    let id = req.params.id
    let producto = await models.Producto.findByPk(id)
    res.render('admin/producto/editar', {producto: producto, mensaje: req.flash('mensaje')})
    }


export const eliminar = async function(req,res){

    let id = req.params.id;

    await models.Producto.destroy({
        where: {
            id:id
        }
    })
    req.flash('mensaje', 'Producto Eliminado')
    return res.redirect('/admin/producto')
}