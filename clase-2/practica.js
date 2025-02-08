//numeros par e impar
let num = Math.floor(Math.random() * 101);

// Comprobar si es par o impar
if (num % 2 === 0) {
    console.log(num, "es un número par.");
} else {
    console.log(num, "es un número impar.");
}

//numeros primos
function esPrimo(numero) {
    if (numero < 2) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
// Prueba numeros
console.log(esPrimo(2));  
console.log(esPrimo(4)); 
console.log(esPrimo(11)); 
console.log(esPrimo(15)); 

//meses con sus respectiva estacion 

let mes = Math.floor(Math.random() * 13);

// Asignar estación según el mes
let estacion;

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacion = "Invierno";
        break;
    case 3:
    case 4:
    case 5:
        estacion = "Primavera";
        break;
    case 6:
    case 7:
    case 8:
        estacion = "Verano";
        break;
    case 9:
    case 10:
    case 11:
        estacion = "Otoño";
        break;
}

console.log("El mes", mes, "corresponde a la estación de ", estacion);
