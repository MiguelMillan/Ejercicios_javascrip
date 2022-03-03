// Ejercicio 1
// Dadas dos variables numéricas A y B, que el usuario debe teclear,
// se pide realizar un algoritmo que intercambie los valores de ambas
// variables y muestre cuánto valen al final cada una de ellas (recuerda la asignación).

const prompt = require("prompt-sync")();

let number1 = Number(prompt("introduce un numero:"));
// number (4) dentro de number siempre va lo que queremos cambiar a numero
let number2 = Number(prompt("introduce el segundo numero:"));

console.log(typeof number1);
console.log(typeof number2);

let aux = number1;
number1 = number2; 
number2 = aux;

console.log("El nuevo valor del numero uno es:"+ number1)
console.log("El nuevo valor del numero dos es:"+ number2)





