//funcion sin parametros
function saludar (){
    console.log("HOLA MUNDO")
}

saludar()

//funcion con parametros
function saludaralguien (nombree){
    console.log("HOLA ", nombree);
}



//funcion por defecto
function saludarInvitado(nombre="invitado"){
    console.log("hola bienvenido ", nombre);

}

//funcion que retorna
function multiplicar(){
    return a * b ;
}
let resultado = multiplicar(63*5);
console.log(resultado)



saludaralguien("jose");
saludar();
saludarInvitado()

