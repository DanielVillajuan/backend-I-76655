
//
// console.log("Inicio Proceso")

// setTimeout(() => {
//     console.log("Mitad de proceso")
// }, 0)

// console.log("Fin de proceso")

// Promesas


// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(( repuestaPeticion )=>{
//         return repuestaPeticion.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })


// SPREAD OPERATOR y EL REST
// DESTRUCTURING 

// SPREAD 

// const persona = {
//     nombre: "Pedro",
//     apellido: "Pizzaro",
//     edad: 22,
//     email: "asd@gmail.com",
//     domicilio: {
//         descripcion: "Av monte verde",
//         numero : 2222,
//         CP: {
//             partido: "Moron",
//             numero: 1223
//         }
//     }
// }

// const persona2 = {
//     edad: 18,
//     ...persona,
//     estadoCivil: "Soltero"
// }

// console.log(persona2.edad) // 



// function sumarN(operacion,  ...param){
//     if(operacion == '+')
//     return param.reduce((acum, current) => { return acum + current },0)
//     if (operacion == '-')
//         return param.reduce((acum, current) => { return acum - current },0)
// }

// sumarN('-',2,3,5,6,7,1,23,5,3)

// DESTRUCTURING

// const { partido: partPersona, numero } = persona.domicilio.CP

// const mensajePartido = partPersona + ", es tu partido en el DNI"



// const [state, setLoqueSea] = useState(0)

// async function traerPokemon () {
//     console.log('Iniciando proceso')

//     try{
//         const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         const data = await respuesta.json()
//         console.log(data)
//     }catch (e) {
//         console.log(e, "hubo un error")
//     }

//     console.log('Fin proceso')
// }
    

// traerPokemon()


// FALSY

// if(){
//     console.log("es verdadero")
// }else {
//     console.log("es falso")
// }

// 0, "", NaN, null, undefined, false

// 321, "4asd", {}, [], true


// OR, como un setear o comparador por defecto

const baseDeDatos = {
    nombre: ''
}

const nombre = baseDeDatos.nombre ?? 'Nombre por defecto' // fallbacks

console.log({nombre})


function suma(n1, n2 = 0){
    console.log(n2)
    return n1 + n2
}

console.log(suma(1,10))