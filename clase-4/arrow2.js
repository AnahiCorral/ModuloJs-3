const suma = (x,y) => x+y;
console.log(suma(90,78))

const saludar = (nombre) => {
    return `HOLA ${nombre}`
}
console.log(saludar(`oscar`));

const numeros = [1,2,3,4,5,6,7,8,9]
const multiplicados = numeros.map(num => num*2)
console.log(multiplicados)