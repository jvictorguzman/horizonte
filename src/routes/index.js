const express = require('express')
const router = express.Router()

import * as authMiddleware from './../middlewares/auth.middleware'
import * as paginaController from './../controllers/pagina.controller'
import * as categoriaController from './../controllers/categoria.controller'
import * as authController from './../controllers/auth.controller'
import * as usuarioController from './../controllers/usuario.controller'
import * as productoController from './../controllers/producto.controller'
// rutas de pagina web

router.get('/', paginaController.inicio)
router.get('/acercade', paginaController.nosotros )
router.get('/login', paginaController.ingresar)

// rutas de auth
router.post('/auth/login', authController.login)
router.post('/registro', authMiddleware.estaLogueado, authController.registro)

// rutas de administracion
//categoria
router.get('/admin/categoria', authMiddleware.estaLogueado, categoriaController.listar)
router.get('/admin/categoria/:id', authMiddleware.estaLogueado, categoriaController.mostrar)
router.post("/admin/categoria", authMiddleware.estaLogueado,categoriaController.guardar)
router.get("/api/categoria", authMiddleware.estaLogueado, categoriaController.apiListar);

// para usuario
router.get('/admin/usuario', authMiddleware.estaLogueado, usuarioController.listar)
router.get('/admin/usuario/nuevo', authMiddleware.estaLogueado, usuarioController.nuevo)
router.post('/admin/usuario', authMiddleware.estaLogueado, usuarioController.guardar)

router.get('/admin/usuario/:id/editar', authMiddleware.estaLogueado, usuarioController.editar)
router.post('/admin/usuario/:id', authMiddleware.estaLogueado, usuarioController.modificar)
router.post('/admin/usuario/:id/eliminar', authMiddleware.estaLogueado, usuarioController.eliminar )

//producto
router.get('/admin/producto', authMiddleware.estaLogueado, productoController.listar)
router.get('/admin/producto/:id', authMiddleware.estaLogueado, productoController.mostrar)
router.post('/admin/producto', authMiddleware.estaLogueado, productoController.guardar )
router.get('/admin/producto/:id/editar', authMiddleware.estaLogueado, productoController.editar)
// router.post('/admin/producto/:id', authMiddleware.estaLogueado, productoController.modificar)
router.post('/admin/producto/:id/eliminar', authMiddleware.estaLogueado, productoController.eliminar)

module.exports = router