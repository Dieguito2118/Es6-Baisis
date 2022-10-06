let colors = require ('colors');
const estudiantes1 = ["Juan Diego",
                      "Juan Camilo",
                      "Laura",
                      "Vero"
                    ]
const estudiantes2 = [
                        "Enrique",
                        "Maicol",
                        "Daniela",
                        "Julian"
                    ]
//operador spread(resto)
const estudiantes3 = [
                        'Vero' , 
                        ...estudiantes1 , 
                        "Paula",
                        ...estudiantes2
]
console.log(estudiantes3)