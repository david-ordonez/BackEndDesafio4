const express = require('express');
const { Router } = express;
const ProductosApi = require('./api/productos.js');

// router de productos

const productosApi = new ProductosApi();

const productosRouter = new Router();

// servidor

const app = express();
app.use(express.static('public'));
app.use('/api', productosRouter);

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on("error", error => console.log(`Error en servidor ${error}`));

//RUTAS LLAMANDO A LOS METODOS DE LA CLASE

app.get('/productos', (req, res) => {
    res.send(productosApi.listarAll());
 })

 app.get('/api/productos/:id', (req, res) => {
     const id = req.params.id;
     const producto = productosApi.listar(id)
     if(producto === undefined){
         res.status(404).send({ error: 'Producto no encontrado'});
     }
     res.json(producto);
 })

 app.post('/api/productos/', (req, res) => {
    res.send(productosApi.listarAll());
 })

 app.put('/api/productos/:id', (req, res) => {
    res.send(productosApi.listarAll());
 })

 app.delete('/api/productos/:id', (req, res) => {
    res.send(productosApi.listarAll());
 })
