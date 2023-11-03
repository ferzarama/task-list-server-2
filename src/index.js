const express = require("express")
const ejs = require("ejs")
const {dirname} = require("path")
const path = require('path');
const directorioActual = __dirname;
const rutaArchivoEnViews = path.join(directorioActual, 'views');
console.log('La ruta al archivo en la carpeta "views" es: ' + rutaArchivoEnViews);




const app= express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index', { title: 'the firts app with node' }))

app.get('/about', (req, res) => res.render('about', { title: 'about me'}))

app.get('/contact', (req, res) => res.render('contact', { title: 'Task-List'}))

app.listen(3000)
console.log('server is listening on port', 3000)