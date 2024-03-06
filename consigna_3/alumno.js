class Alumno {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para imprimir el nombre del alumno
    imprimirNombre() {
      console.log(`Nombre: ${this.nombre}`);
    }

    // Método para imprimir la edad del alumno
    imprimirEdad() {
        console.log(`Edad: ${this.edad}`);
    }  
  
    // Método para verificar si el alumno es mayor de edad
    verificarMayorEdad() {
      if (this.edad >= 18) {
        console.log(`${this.nombre} es mayor de edad.`);
      } else {
        console.log(`${this.nombre} no es mayor de edad.`);
      }
    }
  }
  
  // Crea un nuevo alumno
  const alumno1 = new Alumno("Martin", 20);
  
  // Imprime los datos del alumno
  alumno1.imprimirNombre();
  alumno1.imprimirEdad();
  
  // Verifica si el alumno es mayor de edad
  alumno1.verificarMayorEdad();
  