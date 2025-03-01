//funcion anonima
const anonima = function(){
    console.log("hOLA A TODOS!");
}

anonima()


//callback
setTimeout(function(){
    console.log("Este comentario va a tener un tiempo de espera");
},5000);

//arows fuction 
const arrowFuction = () => {
    console.log("HOLS ES UNA FLECHA =>")
}
arrowFuction()

document.getElementById("boton").addEventListener("click", function() {
    alert("Hola mundo")
})