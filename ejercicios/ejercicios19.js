// Ejercicio 19
// Dada una secuencia de longitud indefinida de números
// leídos por teclado, que acabe con un –1, por ejemplo:
// 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; Realizar el algoritmo
// que calcule la media aritmética. Suponemos que el
// usuario no insertará número negativos.
const prompt = require("prompt-sync")();
let sum = 0;
let numberAmount = 0;
let number = Number(prompt("Introduce un número: "));
/* while (number !== 0) {
  sum = sum + number;
  numberAmount++;
  number = Number(prompt("Introduce un número: "));
} */
for (numberAmount; number !== 0; numberAmount++) {
  sum = sum + number;
  number = Number(prompt("Introduce un número: "));
}
if (numberAmount === 0) {
  console.log("No se ha introducido ningun numero valido");
} else {
  const average = sum / numberAmount;
  console.log(`La media es ${average}`);
}