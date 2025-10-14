import fs from 'node:fs'

fs.writeFile('./callbacks.txt','Estoy es creado con los callbacks de fs', (error) => {
    if(error) return console.log("Error al crear el archivo")

    fs.readFile('./callbacks.txt', 'utf-8', (error, resultado) => {
        if(error) return console.log(" error al leer el archivo")
        console.log(resultado)

        fs.appendFile('./callbacks.txt', 'Agregado desde callbacks appenfile', (error) => {
            if(error) return console.log("error al agregar contenido al archivo")
            
            fs.readFile('./callbacks.txt','utf-8', (err, data) => {
                if(err) return console.log('ERror a leer el archivo')
                    console.log(data)
            })
        })
    })
})