import fs from 'fs'

// fs.writeFileSync('./ejemplo.txt', 'Buenas noches coderhouse')

if(fs.existsSync('./ejemplo.txt')){
    console.log('Existe el archivo')

    const contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')

    console.log(contenido)


    fs.appendFileSync('./ejemplo.txt', ' contenido extra agregado desde if')


    const contenidoAgregado = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenidoAgregado)

    fs.unlinkSync('./ejemplo.txt')
}