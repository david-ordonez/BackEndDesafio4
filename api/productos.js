class ProductosApi {
    constructor() {
        this.productos = []
        this.id = 0
    }

    listar(id) {
       return this.productos.find(item => item.id === id);
    }

    listarAll() {
        return this.productos;
    }

    guardar(prod) {
        this.productos.push(prod);
    }

    actualizar(prod, id) {
        
    }

    borrar(id) {
        
    }
}

module.exports = ProductosApi;
