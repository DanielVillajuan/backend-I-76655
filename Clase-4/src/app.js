import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const app = express()

app.use(express.json()) // vamos a soportar poder recibir json en las peticiones

// Array de productos
const productos = [
    {
        id: 'dda73549-45c7-4361-b754-a206d9e7cfe3',
        descripcion: "Laptop Gaming ASUS ROG",
        stock: 15,
        precio: 120000,
        esDescuento: true
    },
    {
        id: 'dda73549-45c7-4361-b754-a206d9e7cfe2',
        descripcion: "iPhone 15 Pro Max",
        stock: 8,
        precio: 450000,
        esDescuento: false
    },
    {
        id: 'dda73549-45c7-4361-b754',
        descripcion: "Samsung Galaxy S24 Ultra",
        stock: 12,
        precio: 380000,
        esDescuento: true
    },
    {
        id: 'dda73549-45c7-4361-b754-a206d9e45cfe2',
        descripcion: "MacBook Pro M3",
        stock: 5,
        precio: 650000,
        esDescuento: false
    },
    {
        id: 'dda73549-45c7-4361',
        descripcion: "PlayStation 5",
        stock: 20,
        precio: 180000,
        esDescuento: true
    },
    {
        id: 'dda73549-45c7-4361-b754-a2sf',
        descripcion: "Nintendo Switch OLED",
        stock: 18,
        precio: 95000,
        esDescuento: false
    },
    {
        id: 'ddsfds9-45c7-4361-b754-a206d9e7cfe2',
        descripcion: "AirPods Pro 2da Gen",
        stock: 25,
        precio: 85000,
        esDescuento: true
    },
    {
        id: 'dda73549-sdfs-4361-b754-a206d9e7cfe2',
        descripcion: "iPad Air 5ta Gen",
        stock: 10,
        precio: 220000,
        esDescuento: false
    },
    {
        id: 'dda73549-2-4361-b754-a206d9e7cfe2',
        descripcion: "Monitor LG UltraWide 34'",
        stock: 7,
        precio: 150000,
        esDescuento: true
    },
    {
        id: 'dda73549-45c7-3-b754-a206d9e7cfe2',
        descripcion: "Teclado Mecánico Logitech",
        stock: 30,
        precio: 25000,
        esDescuento: false
    }
]




// http://localhost:8080/
app.get('/', (req, res)=> {
    res.send('Hola esto es una respuesta desde la api con el path /')
})

// http://localhost:8080/perfil
app.get('/perfil', (req, res)=> {
    res.send('Hola esto es una respuesta desde la api con el path /perfil')
})

// http://localhost:8080/perfil/1
app.get('/perfil/:userId', (req, res) => {
    const idUser = req.params.userId
    res.send('Consultaste el perfil del usuario con id:'+ idUser)
})

app.post('/product', (req, res) => {
    const newProduct = req.body

    // guardar el producto
    productos.push(newProduct)

    // validar los campos del producto recibido por body, en caso de no recibir alguno responder con un 404 faltan parametros
    // caso contrario, devolver un 200 con el id del producto y un mensaje de ok

    res.json({payload: productos})
})

// endpoint que devuelve la lista de productos
app.get('/product', (req, res) => {
    res.status(200).json({ payload: productos })
})

// endpoint que devuelve informacion de un producto especifico
app.get('/product/:productId', (req, res) => {
    const productId = req.params.productId

   // busqueda
    const productFinded = productos.find(prod => prod.id === productId)
    if(!productFinded) { return res.status(404).json({payload: null, message: "not found"}) }

    res.status(200).json({ payload: productFinded })
})

app.listen(8080, ()=> {
    console.log("Server on puerto 8080")
})
