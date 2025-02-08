//mensaje de ejemplo - imprimir
console.log("Hola Mundo");

//tipos de dato - primitivos 
let numero = 42;
let palabra = 'veinticinto';
let num = -666;
let valor = 0;
let cadenaVacia = "";
let RFC = null;
let cuenta; //undefined
let registrado = false; //logico
let idUnico = Symbol("identificador");
let numeroGrande = 1234567890123456789012345678901234567890n;



//imprimiendo el tipo de dato
console. log(typeof numero);
console.log(typeof palabra);
console.log(typeof num);
console.log(typeof valor);
console.log(typeof cadenaVacia);
console.log(typeof RFC);
console.log(typeof cuenta);
console.log(typeof registrado);
console.log(typeof idUnico);
console.log(typeof numeroGrande); // "bigint"


//imprimiendo el valor
console.log(numero);
console.log(palabra);
console.log(num);
console.log(valor);
console.log(cadenaVacia);
console.log(RFC);
console.log(cuenta);
console.log(registrado);
console.log(idUnico);
console.log(numeroGrande); // 1234567890123456789012345678901234567890n


//datos compuestos
//Ejemplo de un Objeto*
let persona = {
    nombre: "Ana",
    edad: 25
};

// Ejemplo de un Array (Lista de elementos)
let frutas = ["Manzana", "Banana", "Uva"];
 
//Ejemplo de una Función
function saludar() {
    return "Hola, mundo!";
}

// 📌 Ejemplo de un **Date** (Fecha y hora)
let fechaActual = new Date();


// Set
let numerosUnicos = new Set([1, 2, 3, 3, 4]);

// MAP- clave-valor, permite claves de cualquier tipo
let mapa = new Map();
mapa.set("nombre", "Carlos");
mapa.set(10, "Número diez");

//tipo de dato
console.log(typeof persona);
console.log(typeof frutas);
console.log(typeof saludar);
console.log(typeof fechaActual);
console.log(typeof numerosUnicos);
console.log(typeof mapa);

//impresion de valores compuestos
console.log(persona);
console.log(frutas);
console.log(saludar());;
console.log(fechaActual);
console.log(numerosUnicos);
console.log(mapa)