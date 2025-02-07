//imprimimr el valor
console.log('Hola mundo');



let nombre = "Anahi";
let edad = 20;
let esMayorEdad = true; //variable declarada e inicializada 
let saldo; //undefined
let Cuenta = null; //no hay ningun valor--esta vacio
let id = Symbol("id");
let nueroGrande = 122123343443545555454545n; //biginit

//tipo de dato de las variables
console.log(typeof id)
console.log(edad)


//datos de referencia - compuestos

//coleccion de datos-clave y valor...objeto con multiples tipos de dato
let persona = {
    nombre: "anahi",
    edad: 20,
    nacionalidad: "Mexicana",
}

//extracin de valor
console.log(persona.edad);
console.log(persona)

//arrays
let numeros = [1,2,3,4,5]
console.log(numeros[0]);

//funciones

let suma = function  suma(a,b) { return a + b}
console.log(suma(2,5));


//fecha
let fecha = new Date();
console.log(fecha);



