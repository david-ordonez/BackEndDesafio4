
# API Restful

Proyecto basado en Node.js y express que ofrece una API RESTful de productos.

## Obtener todos los productos

Devuelve todos los productos en el arreglo

```http
  GET /api/productos
```

## Obtener un producto

Devuelve un solo producto segun su id

```http
  GET /api/productos/$(id)
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Requerido**. Id del producto    |

## Agregar un producto

```http
  POST /api/productos/
```
Recibe y agrega un producto, y lo devuelve con su id asignado.

| Atributo  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`   | `string` | **Requerido**. nombre del producto    |
| `price`   | `float`  | **Requerido**. precio del producto    |
| `thumbnail`| `string`| **Requerido**. direccion de la imagen del producto    |

## Actualizar un producto

```http
  PUT /api/productos/$(id)
```
Recibe y actualiza un producto según su id.

| Atributo  | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Requerido**. Id del producto    |
| `title`   | `string` | **Requerido**. nombre del producto    |
| `price`   | `float`  | **Requerido**. precio del producto    |
| `thumbnail`| `string`| **Requerido**. direccion de la imagen del producto    |

## Borrar un producto

Elimina un producto según su id.

```http
  DELETE '/api/productos/$(id) 
```

| Parametro | Tipo     | Descripcion                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `number` | **Requerido**. Id del producto    |
