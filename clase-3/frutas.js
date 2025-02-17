// 6. Clasificación de Frutas
const frutas = [
    "Kiwi", "Limón", "Naranja", "Manzana", "Uva", "Arándano", "Piña",
    "Fresa", "Ciruela", "Mango", "Mandarina", "Frambuesa",
    "Coco", "Aguacate",  "Almendra", "Avellana", "Cacahuete", "Nuez",
    "Plátano", "Cereza", "Higo", "Melón", "Sandía", "Pera", "Granada", "Chirimoya"
];

const clasificacionFrutas = {
    acidas: ["Kiwi", "Limón", "Naranja", "Manzana", "Uva", "Arándano", "Piña"],
    semiAcidas: ["Fresa","Ciruela","Mango", "Mandarina", "Frambuesa"],
    neutras: ["Coco", "Aguacate", "Almendra", "Avellana", "Cacahuete", "Nuez"],
    dulces: ["Plátano", "Cereza", "Higo", "Melón", "Sandía", "Pera", "Granada", "Chirimoya"]
};

const conteoFrutas = {
    acidas: 0,
    semiAcidas: 0,
    neutras: 0,
    dulces: 0
};
//ciclo for
for (let fruta of frutas) {
    if (clasificacionFrutas.acidas.includes(fruta)) {
        conteoFrutas.acidas++;
    } else if (clasificacionFrutas.semiAcidas.includes(fruta)) {
        conteoFrutas.semiAcidas++;
    } else if (clasificacionFrutas.neutras.includes(fruta)) {
        conteoFrutas.neutras++;
    } else if (clasificacionFrutas.dulces.includes(fruta)) {
        conteoFrutas.dulces++;
    }
}

console.log("Clasificación de frutas:", conteoFrutas);