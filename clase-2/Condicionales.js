// Genera una nota aleatoria entre 0 y 100
let notaAleatoria = Math.floor(Math.random() * 101); // Entre [0,100]

console.log(`La nota del estudiante es: ${notaAleatoria}`);


if (notaAleatoria > 0) { // Verifica si la nota es mayor que 0
    if (notaAleatoria >= 90) {
        console.log("El estudiante aprueba con Excelente.");
    } else if (notaAleatoria >= 75 && notaAleatoria <= 89) {
        console.log("El estudiante aprueba con Bien.");
    } else if (notaAleatoria >= 60 && notaAleatoria <= 74) {
        console.log("El estudiante aprueba con Suficiente.");
    } else {
        console.log("El estudiante no aprueba.");
    }
} else {
    console.log("La nota debe ser mayor que cero.");
}

/*
//codigo sin numero aleatorio
let nota = 90; //valores para nota 45,60,75,0
if (nota) { // Verifica si la nota es mayor que 0
    if (nota >= 90) {
        console.log("El estudiante aprueba con Excelente.");
    } else if (nota >= 75 && nota <= 89) {
        console.log("El estudiante aprueba con Bien.");
    } else if (nota >= 60 && nota <= 74) {
        console.log("El estudiante aprueba con Suficiente.");
    } else {
        console.log("El estudiante no aprueba.");
    }
} else {
    console.log("La nota debe ser mayor que cero.");
}*/