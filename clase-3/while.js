let contador = 0

//sintaxis del ciclo while 
while (contador <= 10){
    console.log(contador)
    contador ++; //crear un stop para que si llegue a la condicion

}

//sintaxi de do - while
//ejecutara una vez antes de ejecutar la condicion, al final evalua
let numero = 0;

do {
    console.log("ejecuta el programa al menos una vez");
    numero++;
}while(numero < 1);


//sintaxis for

let variable = 0;
for (let i = 1; i < 10; i++){
    variable += i;
}

console.log("la suma total es ", variable)

//for
const numeros = [10, 15, 47, 80, 25];
//numero de vueltas a iterar
for(let num of numeros){
    console.log(num);
} 

//do while
//parseint delvolvera numero senteros o decimales de string a numero es una funcion
let respuesta;
do {
    respuesta = parseInt(prompt("por favor ingresa un numero mayor a 20"));  
}while (respuesta <= 20);
console.log(respuesta)
//alert("El numero es: " + respuesta)


//while
let text = "Este modulo es increible porque estoy aprendiendo a programar !!!";
let vocal = "aeiouAEIOU"
let countuer = 0;
let i = 0;

while (i < text.length){
    if (vocal.includes(text[i])){
        countuer++
    }
    i++
}

console.log('EL TEXTO TIENE: ', countuer , "vocales")


//ejercicios por realizar
//usar cualquier tipo de bucle para realizar una tabla de multiplicar
//pedir al usuario un numero, cualquier numero y mostar la tabla
//contar los digitos de un numero 
//obtener la suma de los digitos de un numero, que sea por el usario o un establecido eJ; 55=10
//encontrar el numero mayor de un arreglo

//discord hacer ejercicios 
//proyecto de clase
//Arreglo de frutas de lo que esta en campus, clasificacion de frutas quee existen 4 tipos acidas, semoacidas, neutras, frutas dulces, recoorido de todo, catalogo de frutas objeto dentro de las frutas acidas)
//objeto, array clasificar y hacer un obejo ver como clasificarlo