//Traer la dependencia del componente suma

import { sumar, restar } from './sumar.js'
import materias from './materias.js'

//1.Recorrido de arreglo: forEach
materias.forEach((materia)=> { 
    if(materia.profesor === 'Cristian Buitrago'){
        console.log( `materia: ${materia.name}`)
        console.log( `notas: ${materia.notas}`)
    }
    })
//2.Convertir a un arreglo de profesores
// metodo map()
let profesores = materias.map(function(materia){
    return materia.profesor
})

//3.Agregar una materia al arreglo de materias
//  push()
materias.push(
    {
        id: 5,
        name: "Cultura Fisica",
        profesor: "Luis Baquero",
        notas: [
            2 ,
            3.5
        ]
    }
)

//4.Busqueda en arreglos
//find
const PHP = materias.find(function(materia){
    return materia.profesor === 'Cristian Buitrago'
})

console.log(PHP)