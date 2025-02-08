//string
let  mensaje = "hola mundo";
console.log(mensaje.toUpperCase()); //metodos


//utilizacion de comillas invertida simple  - permiten insertar variables dentro de una cadena de texto
let nombre = "Natalia";
console.log(`hola ${nombre}`)

//interpretacion de comillas simples template
console.log('hola ${nombre}');
//concatenacion
console.log('hola '+ nombre + 'como estas?');
//otra manfra de concatenar
console.log('Hola', nombre, 'como estas?');


//boolean
let esMayor = false;
console.log(esMayor && false);


//Arrays
let alumnos = ["Adelina", "Randy", "Saul", "Maria"];
console.log(alumnos[3]);

//modificar con asignacion
alumnos[2] = "ian"
console.log(alumnos)

//anadir
alumnos.push("Natalia");
console.log(alumnos);

//iseertar nuevos elementos al inicio
alumnos.unshift("Scarlet");
console.log(alumnos);

console.log(alumnos.length);

//numeros
let x = 2;
 x += 5;

 console.log(x)


 let division = 0;
 console.log(division / 0);

 //si aprobe o repobre
 let nota = 5.6;
 const notaaprobada = 6;

 if (nota >= notaaprobada){
    console.log("Estas aprobado")
 } else {
    console.log("estas repobrado")
 }


 let temp = 40;
 if (temp > 30) {
    console.log("te estas derritiendo de calor");
 } else if(temp >= 21 && temp <=29){
    console.log("Esta haciendo un clima agradable");
 }else {
    console.log("Te estas congelando")
 }

//operador ternario
let edad = 18
let resultado = (edad >= 18) ? "es mayor de edad" : "es menor de edad";

console.log(resultado);


let dia = "jueves"
switch(dia){
    case 'lunes':
        console.log('inicio semana');
        break;
    case 'jueves':
        console.log('jueves chido');
        break;

    default:
        console.log('No se que dia es')


}


//valor aleatorio. redonde al valor mas cercano, es un metodo

let valorRandom = Math.floor(Math.random() *101);
console.log(valorRandom)