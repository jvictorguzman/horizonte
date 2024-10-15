// importar dependencias del core de node

// importar dependencias o paquetes de terceris (NPM)
import express from 'express'
import expressLayouts from 'express-ejs-layouts'
// importar dependencias o modulos locales 
import rutas from "./routes"

import session from 'express-session'
import flash from 'connect-flash'
// const session = require('express-session')
// const flash = require('connect-flash')

// configurar paquetes
let app = express()

// config session
app.use(session({
    secret:'MI_CODIGO_SECRETO',
    saveUninitialized: true,
    resave:true,
    cookie: {
        maxAge: 60000*60 // configura el tiempo de la sesion activa , en este caso 1 hora
    }
}))

//config flash
app.use(flash())

// declarar variables auxiliares
const PORT = process.env.PORT || 3000
app.set("puerto", PORT)

// archivos estaticos (css, js, img)
app.use(express.static('public'))

// configurar motor de plantillas 
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout', 'layouts/layout')


app.set('views', './src/views') // aqui vamos a renderizar las vistas

// configurar peticiones del cliente (req.body)
app.use(express.urlencoded({extended: false}))

// parse application/json
app.use(express.json())


// rutas
app.use("/", rutas)
// levantar el servidor
app.listen(app.get("puerto"), () => {
    console.log(`Servidor levantado en http://127.0.0.1: ${app.get('puerto')}`);
})




