//  Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático. 
// El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. 
// Utilizar el módulo nativo crypto.
// El manager debe contar con los siguientes métodos:
// El método “Crear usuario” debe recibir un objeto con los campos:
// Nombre
// Apellido
// Nombre de usuario
// Contraseña
// El método debe guardar un usuario en un atributo estático llamado “Usuarios”, 
// recordando que la contraseña debe estar hasheada por seguridad
// El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
// El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,
// 2do paso.  
// debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, 
//   Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, 
//   o si la contraseña no coincide.
import bcrypt from 'bcrypt';
import fs from 'fs'

function createHash(password){
    const hashingString = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
    console.log(password, '-->', hashingString)
    return hashingString
}

function isValidPassword(password, usernamePassowrd){
    return bcrypt.compareSync(password, usernamePassowrd)
}

class UsersManager {
    static bbdd

    static getInstance(){
        if(fs.existsSync('./bbdd.json')){
            this.bbdd = JSON.parse(fs.readFileSync('./bbdd.json'))
            return;
        }
        this.bbdd = {data:[]}
        fs.writeFileSync('./bbdd.json', JSON.stringify({data: []}))
    }

    static crearUsuario({ nombre, apellido, username, password }){
        this.bbdd.push({
            nombre,
            apellido,
            username,
            password: createHash(password)
        })
        
        fs.writeFileSync('./bbdd.json', JSON.stringify(this.bbdd))

    }

    static modificarUsuario({username, newPassword}){
        // logica para modificar la contraseña

        // fs.writeFileSync('./bbdd.json', JSON.stringify(this.bbdd))
    }

    static eliminarUsuario (username){
         // logica para eliminar

        // fs.writeFileSync('./bbdd.json', JSON.stringify(this.bbdd))
    }

    static mostrarUsuarios(){
        console.log(this.bbdd)
    }

    static validarUsuario(username, password){
        const userFinded = this.bbdd.find((usuario) => usuario.username === username)

        if(!userFinded) return console.log("Error al loguearse")

        const isValid = isValidPassword(password, userFinded.password)

        if(!isValid) return console.log("No pudiste loguearte")

        console.log("Te logueaste perfectamente")
    }
}

UsersManager.getInstance()


// UsersManager.crearUsuario({nombre: "pedro", apellido: "gonzalez", username: "rodo123", password: "coder2025"})

// console.log(UsersManager.bbdd)

// UsersManager.validarUsuario('rodo122','coder2025') // Error al loguearse
// UsersManager.validarUsuario('rodo123','coder2023') // No pudiste loguearte
// UsersManager.validarUsuario('rodo123','coder2025') // Te logueaste perfectamente