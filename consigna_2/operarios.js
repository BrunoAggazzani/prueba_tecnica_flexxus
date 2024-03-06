const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Operarios {
  constructor() {
    this.sueldos = []; // Vector para almacenar los sueldos
    this.count = 0; // Contador para el número de operarios ingresados
  }

  // Método para cargar los sueldos en el vector
  cargarSueldos() {
    return new Promise((resolve, reject) => {
      rl.question(`Ingrese el sueldo del operario ${this.count + 1}: `, (sueldo) => {
        this.sueldos.push(parseFloat(sueldo));
        this.count++;
        if (this.count < 5) {
          this.cargarSueldos().then(resolve).catch(reject);
        } else {
          resolve();
        }
      });
    });
  }

  // Método para imprimir el vector de sueldos
  imprimirSueldos() {
    console.log("Sueldos de los operarios:");
    for (let i = 0; i < this.sueldos.length; i++) {
      console.log(`Operario ${i + 1}: ${this.sueldos[i]}`);
    }
  }
}

// Instancia de la clase Operarios
const operarios = new Operarios();

// Carga los sueldos
operarios.cargarSueldos().then(() => {
  // Imprime los sueldos
  operarios.imprimirSueldos();
  rl.close();
}).catch((error) => {
  console.error(error);
  rl.close();
});
