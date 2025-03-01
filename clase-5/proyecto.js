// Definición del objeto libro con propiedades y métodos
const libro = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: [], // Lista para almacenar capítulos del libro
  
    // Método para describir el libro
    desLibro: function() {
      console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`);
    },
    // Método para agregar un capítulo al libro
    agregarCapitulo: function(capitulo) {
      this.capitulos.push(capitulo);
      console.log(`Capítulo "${capitulo}" agregado al libro.`);
    },
    // Método para eliminar un capítulo del libro
    eliminarCapitulo: function(capitulo) {
      const indice = this.capitulos.indexOf(capitulo);
      if (indice !== -1) {
        this.capitulos.splice(indice, 1);
        console.log(`Capítulo "${capitulo}" eliminado del libro.`);
      } else {
        console.log(`El capítulo "${capitulo}" no se encuentra en la lista.`);
      }
    }
  };
  // uso
  libro.desLibro();
  libro.agregarCapitulo("Capítulo 1: Macondo");
  libro.agregarCapitulo("Capítulo 2: José Arcadio Buendía");
  libro.eliminarCapitulo("Capítulo 1: Macondo");
  console.log(libro.capitulos); // lista de capítulos
  