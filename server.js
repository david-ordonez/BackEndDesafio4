const express = require('express');
const { Router } = express;
const ProductosApi = require('./api/productos');

const app = express();
app.use(express.static('public'));

// router de productos
const productosApi = new ProductosApi();

const productosRouter = new Router();
productosRouter.use(express.json());
productosRouter.use(express.urlencoded({extended: true}));

// servidor
app.use('/api/productos', productosRouter);

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on("error", error => console.log(`Error en servidor ${error}`));

//RUTAS LLAMANDO A LOS METODOS DE LA CLASE

productosRouter.get('/', (req, res) => {
    res.send(productosApi.listarAll());
})

productosRouter.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = buscarProducto(id);
    if(producto)
        return res.send(producto);

    res.status(404).send({ error: 'Producto no encontrado' });
})

productosRouter.post('/', (req, res) => {
    const newProducto = req.body;
    if (newProducto)
        return res.send(productosApi.guardar(newProducto));

    res.status(400).send({ error: 'Error al agregar' })
})

productosRouter.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nuevoProducto = req.body;
    if (buscarProducto(id))
        return res.send(productosApi.actualizar(nuevoProducto, id));

    res.status(404).send({ error: 'Producto no encontrado' });
})

productosRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (buscarProducto(id))
        return res.send(productosApi.borrar(id));

    res.status(404).send({ error: 'Producto no encontrado' });
})

const buscarProducto = (id) => {
    const producto = productosApi.listar(id)
    return producto;
}
