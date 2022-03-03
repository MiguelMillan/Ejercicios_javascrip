/* Desarrollar un algoritmo que lea 10 números por teclado y calcule el cubo de cada uno de ellos. En 
cada lectura, tiene que indicar por pantalla el número que está pidiendo. Ejemplo de salida por 
pantalla: */

console.clear
const prompt = require("prompt-sync")();

let Number;
let potencia;

for (let i = 1; i < 10 ; i++);
 Number=prompt("introduce un numero:");
 potencia=Number**3
 console.log("el cubo es",Number+potencia);