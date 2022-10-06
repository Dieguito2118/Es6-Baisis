function imprimir ( c ){
    console.log(c)
}

//CallBack: Funcion a ejecutar dentro de suma
function sumar(a, b, callback){
    callback(a + b)
}

let resultado=0;

//Ejecutar: llamar a sumar
sumar(7, 8, imprimir(resultado))