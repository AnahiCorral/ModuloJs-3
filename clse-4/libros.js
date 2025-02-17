let librosLeidos = [];

function agregarLibro(titulo) {
    librosLeidos.push(titulo);
    console.log(`Libro agregado: ${titulo}`);
}

function mostrarLibrosLeidos() {
    console.log("Libros leídos:");
    librosLeidos.forEach(libro => console.log(libro));
}

// Ejemplo de uso
agregarLibro("El Principito");
agregarLibro("1984");
mostrarLibrosLeidos();
