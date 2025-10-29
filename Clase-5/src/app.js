import express from 'express'
import UserRoute from './routes/user.route.js'
import PetsRoute from './routes/pets.route.js'
import ViewRoutes from './routes/view.route.js'
import path from 'node:path'
import handlebars from 'express-handlebars'

const app = express()

app.engine('handlebars', handlebars.engine()) // defino a express que va usar el motor de plantilla con la extension handlebars
app.set('views', path.join(process.cwd(),'src','views')) // definimos que las vistas estaran en esta ruta src/views asi handlebars sabra donde buscarlas
app.set('view engine', 'handlebars')

// si al use no le especifico la ruta como primer parametro, lo aplicara en '/'
app.use('static',express.static(path.join(process.cwd(), 'src','public'))) // 'c:/userpc/documents/capertacoder/clase-5/src/public

// si le especifico a use el primer parametro, lo aplicara siempre a la misma
app.use('/api/user', UserRoute)
app.use('/api/pets', PetsRoute)
app.use('/', ViewRoutes)

app.listen(8080, () => {
    console.log("Server ON")
})