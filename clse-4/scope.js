var globalVar = "soy una variable local"

function saludar() {
    console.log(globalVar)
}
saludar()

//funcion Scope
function saludo(){
    let mensaje = "hola a todos"
    console.log(mensaje);
}
saludo()

//block scope
if(true){
    let blockScope = "solo existe este bloque"
    console.log(blockScope)
}

console.log(blockScope)



console.log(variable);
var variable = "Hola"


//palindromo